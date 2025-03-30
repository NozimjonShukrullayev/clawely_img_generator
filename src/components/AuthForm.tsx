import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/context/AuthContext'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function AuthForm() {
	const [searchParams] = useSearchParams()
	const mode = searchParams.get('mode') || 'sign-in'

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const { signIn, signUp, signInWithGoogle, isLoading } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			if (mode === 'sign-in') {
				await signIn(email, password)
			} else {
				await signUp(email, password)
			}
			navigate('/')
		} catch (error) {
			console.error('Authentication error:', error)
		}
	}

	// const handleGoogleSignIn = async () => {
	// 	try {
	// 		await signInWithGoogle()
	// 		navigate('/')
	// 	} catch (error) {
	// 		console.error('Google sign in error:', error)
	// 	}
	// }

	return (
		<Card className='w-full max-w-md mx-auto'>
			<Tabs defaultValue={mode === 'sign-up' ? 'sign-up' : 'sign-in'}>
				<TabsList className='grid w-full grid-cols-2'>
					<TabsTrigger
						value='sign-in'
						onClick={() => navigate('/auth?mode=sign-in')}
					>
						Kirish
					</TabsTrigger>
					<TabsTrigger
						value='sign-up'
						onClick={() => navigate('/auth?mode=sign-up')}
					>
						Ro'yxatdan o'tish
					</TabsTrigger>
				</TabsList>

				<TabsContent value='sign-in'>
					<form onSubmit={handleSubmit}>
						<CardHeader>
							<CardTitle>Hisobingizga kiring</CardTitle>
							<CardDescription>
								Clawely ilovasi imkoniyatlaridan to'liq foydalanish uchun
								tizimga kiring
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									placeholder='sizning@email.com'
									value={email}
									onChange={e => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='password'>Parol</Label>
								<div className='relative'>
									<Input
										id='password'
										type={showPassword ? 'text' : 'password'}
										placeholder='••••••••'
										value={password}
										onChange={e => setPassword(e.target.value)}
										required
									/>
									<Button
										type='button'
										variant='ghost'
										size='icon'
										className='absolute right-0 top-0 h-full px-3'
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<EyeOff className='h-4 w-4' />
										) : (
											<Eye className='h-4 w-4' />
										)}
									</Button>
								</div>
							</div>

							{/* <div className='relative my-6'>
								<div className='absolute inset-0 flex items-center'>
									<Separator className='w-full' />
								</div>
								<div className='relative flex justify-center text-xs uppercase'>
									<span className='bg-background px-2 text-muted-foreground'>
										Yoki
									</span>
								</div>
							</div>

							<Button
								type='button'
								variant='outline'
								className='w-full'
								onClick={handleGoogleSignIn}
							>
								<svg className='w-5 h-5 mr-2' viewBox='0 0 24 24'>
									<path
										d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
										fill='#4285F4'
									/>
									<path
										d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
										fill='#34A853'
									/>
									<path
										d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
										fill='#FBBC05'
									/>
									<path
										d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
										fill='#EA4335'
									/>
									<path d='M1 1h22v22H1z' fill='none' />
								</svg>
								Google orqali kirish
							</Button> */}
						</CardContent>
						<CardFooter>
							<Button type='submit' className='w-full' disabled={isLoading}>
								{isLoading ? (
									<div className='flex items-center gap-2'>
										<span className='h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin'></span>
										Kuting...
									</div>
								) : (
									'Kirish'
								)}
							</Button>
						</CardFooter>
					</form>
				</TabsContent>

				<TabsContent value='sign-up'>
					<form onSubmit={handleSubmit}>
						<CardHeader>
							<CardTitle>Hisob yarating</CardTitle>
							<CardDescription>
								Clawely ilovasiga ro'yxatdan o'ting va ajoyib rasmlar yarating
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									placeholder='sizning@email.com'
									value={email}
									onChange={e => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='password'>Parol</Label>
								<div className='relative'>
									<Input
										id='password'
										type={showPassword ? 'text' : 'password'}
										placeholder='••••••••'
										value={password}
										onChange={e => setPassword(e.target.value)}
										required
										minLength={6}
									/>
									<Button
										type='button'
										variant='ghost'
										size='icon'
										className='absolute right-0 top-0 h-full px-3'
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<EyeOff className='h-4 w-4' />
										) : (
											<Eye className='h-4 w-4' />
										)}
									</Button>
								</div>
							</div>

							{/* <div className='relative my-6'>
								<div className='absolute inset-0 flex items-center'>
									<Separator className='w-full' />
								</div>
								<div className='relative flex justify-center text-xs uppercase'>
									<span className='bg-background px-2 text-muted-foreground'>
										Yoki
									</span>
								</div>
							</div>

							<Button
								type='button'
								variant='outline'
								className='w-full'
								onClick={handleGoogleSignIn}
							>
								<svg className='w-5 h-5 mr-2' viewBox='0 0 24 24'>
									<path
										d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
										fill='#4285F4'
									/>
									<path
										d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
										fill='#34A853'
									/>
									<path
										d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
										fill='#FBBC05'
									/>
									<path
										d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
										fill='#EA4335'
									/>
									<path d='M1 1h22v22H1z' fill='none' />
								</svg>
								Google orqali ro'yxatdan o'tish
							</Button> */}
						</CardContent>
						<CardFooter>
							<Button type='submit' className='w-full' disabled={isLoading}>
								{isLoading ? (
									<div className='flex items-center gap-2'>
										<span className='h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin'></span>
										Kuting...
									</div>
								) : (
									"Ro'yxatdan o'tish"
								)}
							</Button>
						</CardFooter>
					</form>
				</TabsContent>
			</Tabs>
		</Card>
	)
}
