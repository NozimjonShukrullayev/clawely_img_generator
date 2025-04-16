import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase'
import { Session, User } from '@supabase/supabase-js'
import { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
	user: User | null
	session: Session | null
	isLoading: boolean
	signIn: (email: string, password: string) => Promise<void>
	signUp: (email: string, password: string) => Promise<void>
	signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Helper function to store session in localStorage
const storeSessionInLocalStorage = (session: Session | null) => {
	if (session) {
		localStorage.setItem(
			'supabase.auth.token',
			JSON.stringify({
				access_token: session.access_token,
			})
		)
	} else {
		localStorage.removeItem('supabase.auth.token')
	}
}

// Helper function to load session from localStorage
const loadSessionFromLocalStorage = () => {
	const storedSession = localStorage.getItem('supabase.auth.token')
	return storedSession ? JSON.parse(storedSession) : null
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const [session, setSession] = useState<Session | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const { toast } = useToast()

	useEffect(() => {
		// Try to recover session from localStorage first
		const storedSession = loadSessionFromLocalStorage()
		if (storedSession) {
			// If we have tokens in localStorage, set the session
			supabase.auth.setSession({
				access_token: storedSession.access_token,
				refresh_token: storedSession.refresh_token,
			})
		}

		// Get initial session
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
			setUser(session?.user ?? null)
			storeSessionInLocalStorage(session)
			setIsLoading(false)
		})

		// Listen for auth changes
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
			setUser(session?.user ?? null)
			storeSessionInLocalStorage(session)
			setIsLoading(false)
		})

		return () => subscription.unsubscribe()
	}, [])

	const signIn = async (email: string, password: string) => {
		try {
			setIsLoading(true)
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password,
			})

			if (error) throw error
			toast({
				title: 'Muvaffaqiyatli kirdingiz',
				description: 'Xush kelibsiz!',
			})
		} catch (error: any) {
			toast({
				title: 'Xatolik yuz berdi',
				description: error.message,
				variant: 'destructive',
			})
			throw error
		} finally {
			setIsLoading(false)
		}
	}

	const signUp = async (email: string, password: string) => {
		try {
			setIsLoading(true)
			const { error } = await supabase.auth.signUp({
				email,
				password,
			})

			if (error) throw error
			toast({
				title: "Ro'yxatdan o'tdingiz",
				description: 'Muvaffaqqiyatli tarzda roʻyxatdan oʻtdingiz.',
			})
		} catch (error: any) {
			toast({
				title: 'Xatolik yuz berdi',
				description: error.message,
				variant: 'destructive',
			})
			throw error
		} finally {
			setIsLoading(false)
		}
	}

	const signOut = async () => {
		try {
			setIsLoading(true)
			const { error } = await supabase.auth.signOut()
			if (error) throw error

			// Clear localStorage
			localStorage.removeItem('supabase.auth.token')

			toast({
				title: 'Chiqib ketdingiz',
			})
		} catch (error: any) {
			toast({
				title: 'Xatolik yuz berdi',
				description: error.message,
				variant: 'destructive',
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				session,
				isLoading,
				signIn,
				signUp,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
