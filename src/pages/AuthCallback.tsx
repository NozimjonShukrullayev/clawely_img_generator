import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthCallback() {
	const navigate = useNavigate()
	const { toast } = useToast()

	useEffect(() => {
		const handleAuthCallback = async () => {
			const { error } = await supabase.auth.getSession()

			if (error) {
				toast({
					title: 'Authentication error',
					description: error.message,
					variant: 'destructive',
				})
				navigate('/auth?mode=sign-in')
				return
			}

			toast({
				title: 'Muvaffaqiyatli kirdingiz',
				description: 'Xush kelibsiz!',
			})
			navigate('/')
		}

		handleAuthCallback()
	}, [navigate, toast])

	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
		</div>
	)
}
