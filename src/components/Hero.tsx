import { HeroRobotImg } from '@/assets'
import { useEffect, useRef } from 'react'
import { Button } from './ui/button'

export default function Hero() {
	const robotRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!robotRef.current) return

			const { clientX, clientY } = e
			const centerX = window.innerWidth / 2
			const centerY = window.innerHeight / 2

			// Calculate how far the mouse is from the center
			const deltaX = (clientX - centerX) / centerX
			const deltaY = (clientY - centerY) / centerY

			// Apply a subtle 3D rotation effect
			robotRef.current.style.transform = `perspective(1000px) rotateY(${
				deltaX * 5
			}deg) rotateX(${-deltaY * 5}deg)`
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	const scrollToPrompt = (id: string) => {
		const promptSection = document.getElementById(id)
		if (promptSection) {
			promptSection.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section className='relative pt-32 pb-16 overflow-hidden min-h-screen flex flex-col justify-center'>
			{/* Background gradient */}
			<div className='absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background -z-10'></div>

			{/* Animated background shapes */}
			<div className='absolute top-20 right-[10%] w-64 h-64 rounded-full bg-accent/20 blur-[100px] animate-pulse-subtle'></div>
			{/* <div className='absolute bottom-20 left-[10%] w-64 h-64 rounded-full bg-blue-500/20 blur-[100px] animate-pulse-subtle'></div> */}

			<div className='container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12'>
				<div className='flex-1 text-left space-y-6 animate-slide-up'>
					<div className='inline-block rounded-full px-3 py-1 text-sm bg-accent/10 text-accent border border-accent/20'>
						AI-powered image generation
					</div>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
						Tasavvurlaringizni
						<span className='text-gradient'> suniy intellekt</span> yordamida
						rasmlarga aylantiring
					</h1>
					<p className='text-lg text-muted-foreground max-w-xl'>
						Clawely yordamida fikringizni so'zlar orqali ifodang va uni
						zamonaviy AI texnologiyasi yordamida ajoyib rasmlarga aylantiring.
					</p>
					<a href='#prompt-section' className='mb-5 inline-block'>
						<Button size='lg' onClick={() => scrollToPrompt('prompt-section')}>
							Boshlash
						</Button>
					</a>
					<a href='#gallery-section' className='mb-5 inline-block'>
						<Button
							variant='outline'
							size='lg'
							onClick={() => scrollToPrompt('footer')}
						>
							Galleryni ko'rish
						</Button>
					</a>
				</div>

				<div className='flex-1 flex justify-center' ref={robotRef}>
					{/* 3D Robot Animation */}
					<div className='relative w-full max-w-lg aspect-square animate-float'>
						<img src={HeroRobotImg} alt='hero-img' />

						{/* Animated circles */}
						<div className='absolute -top-10 -left-10 w-full h-full border-2 border-accent/30 rounded-full animate-spin-slow'></div>
						<div className='absolute -top-5 -left-5 w-[90%] h-[90%] border-2 border-accent/20 rounded-full animate-spin-slow'></div>

						{/* Glowing orbs */}
						<div className='absolute top-1/4 right-0 w-8 h-8 bg-accent/80 rounded-full blur-sm animate-pulse'></div>
						<div className='absolute bottom-1/4 left-0 w-6 h-6 bg-blue-500/80 rounded-full blur-sm animate-pulse'></div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M12 5V19M12 19L19 12M12 19L5 12'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
		</section>
	)
}
