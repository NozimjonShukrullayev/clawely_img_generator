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
	const { signIn, signUp, isLoading } = useAuth()
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
