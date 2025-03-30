import { Github, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer id='footer' className='py-12 border-t'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row md:justify-between md:items-center'>
					<div className='mb-6 md:mb-0'>
						<Link
							to='/'
							className='text-2xl font-bold flex items-center gap-2 text-gradient'
						>
							<div className='relative w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg overflow-hidden'>
								<div className='absolute inset-0 flex items-center justify-center text-white font-bold text-lg'>
									D
								</div>
								<div className='absolute inset-0 bg-white mix-blend-overlay opacity-30'></div>
							</div>
							Clawely
						</Link>
						<p className='mt-2 text-muted-foreground text-sm'>
							Suniy intellekt yordamida tasvirlaringizni hayotga keltiring
						</p>
						<div className='flex space-x-4 my-5'>
							<a
								href='https://github.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-foreground transition-colors'
							>
								<Github className='h-5 w-5' />
							</a>
							<a
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-foreground transition-colors'
							>
								<Twitter className='h-5 w-5' />
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-foreground transition-colors'
							>
								<Instagram className='h-5 w-5' />
							</a>
						</div>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
						<div className='space-y-3'>
							<h3 className='font-medium'>Clawely</h3>
							<ul className='space-y-2 text-sm text-muted-foreground'>
								<li>
									<Link to='/' className='hover:text-accent transition-colors'>
										Bosh sahifa
									</Link>
								</li>
								<li>
									<a
										href='#gallery-section'
										className='hover:text-accent transition-colors'
									>
										Galereya
									</a>
								</li>
							</ul>
						</div>

						<div className='space-y-3'>
							<h3 className='font-medium'>Foydalanuvchi</h3>
							<ul className='space-y-2 text-sm text-muted-foreground'>
								<li>
									<Link
										to='/auth?mode=sign-in'
										className='hover:text-accent transition-colors'
									>
										Kirish
									</Link>
								</li>
								<li>
									<Link
										to='/auth?mode=sign-up'
										className='hover:text-accent transition-colors'
									>
										Ro'yxatdan o'tish
									</Link>
								</li>
							</ul>
						</div>

						<div className='space-y-3'>
							<h3 className='font-medium'>Legal</h3>
							<ul className='space-y-2 text-sm text-muted-foreground'>
								<li>
									<a href='#' className='hover:text-accent transition-colors'>
										Maxfiylik siyosati
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-accent transition-colors'>
										Shartlar
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='mt-12 pt-6 border-t text-center text-sm text-muted-foreground'>
					<p>&copy; {currentYear} Clawely. Barcha huquqlar himoyalangan.</p>
				</div>
			</div>
		</footer>
	)
}
