import { Link } from 'react-router-dom'

const Logo = () => {
	return (
		<Link
			to='/'
			className='flex items-center space-x-2 transition-all hover:opacity-80'
		>
			<div className='relative w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg overflow-hidden'>
				<div className='absolute inset-0 flex items-center justify-center text-white font-bold text-lg'>
					D
				</div>
				<div className='absolute inset-0 bg-white mix-blend-overlay opacity-30'></div>
			</div>
			<span className='font-display text-xl font-semibold tracking-tight'>
				Clawely
			</span>
		</Link>
	)
}

export default Logo
