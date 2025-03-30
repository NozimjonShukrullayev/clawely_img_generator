import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import { Menu, X } from 'lucide-react'
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoutDialog from './LogoutDialog'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
	const { user } = useAuth()
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
				isScrolled
					? 'bg-background/80 backdrop-blur-md shadow-sm'
					: 'bg-transparent'
			}`}
		>
			<div className='container mx-auto px-4 flex items-center justify-between'>
				<Link
					to='/'
					className='text-2xl font-bold flex items-center gap-2 text-gradient'
				>
					<div className='relative w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg overflow-hidden'>
						<div className='absolute inset-0 flex items-center justify-center text-white font-bold text-lg'>
							C
						</div>
						<div className='absolute inset-0 bg-white mix-blend-overlay opacity-30'></div>
					</div>
					Clawely
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center gap-6'>
					<Link
						to='/'
						className='font-medium hover:text-accent transition-colors'
					>
						Home
					</Link>
					<div className='flex items-center gap-2'>
						<ThemeToggle />
						{user ? (
							<LogoutDialog />
						) : (
							<Fragment>
								<Link to='/auth?mode=sign-in'>
									<Button variant='ghost'>Kirish</Button>
								</Link>
								<Link to='/auth?mode=sign-up'>
									<Button variant='default'>Ro'yxatdan o'tish</Button>
								</Link>
							</Fragment>
						)}
					</div>
				</nav>

				{/* Mobile Menu Button */}
				<div className='md:hidden flex items-center gap-2'>
					<ThemeToggle />
					<div className='z-50'>
						<Button
							variant='ghost'
							size='icon'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label='Toggle menu'
						>
							{isMenuOpen ? (
								<X className='h-5 w-5' />
							) : (
								<Menu className='h-5 w-5' />
							)}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className='fixed inset-0 bg-background/45 w-screen h-screen'>
					<div className='min-h-60 h-80 z-40 bg-background pt-20 px-6 md:hidden animate-fade-in'>
						<nav className='flex flex-col gap-6 items-center'>
							<Link
								to='/'
								className='text-xl font-medium hover:text-accent transition-colors'
								onClick={() => setIsMenuOpen(false)}
							>
								Home
							</Link>
							{user ? (
								<LogoutDialog />
							) : (
								<>
									<Link to='/auth?mode=sign-in' className='w-full'>
										<Button
											variant='outline'
											className='w-full'
											onClick={() => setIsMenuOpen(false)}
										>
											Kirish
										</Button>
									</Link>
									<Link to='/auth?mode=sign-up' className='w-full'>
										<Button
											variant='default'
											className='w-full'
											onClick={() => setIsMenuOpen(false)}
										>
											Ro'yxatdan o'tish
										</Button>
									</Link>
								</>
							)}
						</nav>
					</div>
				</div>
			)}
		</header>
	)
}
