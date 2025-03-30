import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	// Initialize theme from local storage or system preference
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches

		if (savedTheme) {
			setTheme(savedTheme)
			document.documentElement.classList.toggle('dark', savedTheme === 'dark')
		} else if (prefersDark) {
			setTheme('dark')
			document.documentElement.classList.add('dark')
		}
	}, [])

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		document.documentElement.classList.toggle('dark', newTheme === 'dark')
		localStorage.setItem('theme', newTheme)
	}

	return (
		<Button
			variant='ghost'
			size='icon'
			onClick={toggleTheme}
			className='rounded-full transition-all duration-300 hover:bg-secondary'
			aria-label='Toggle theme'
		>
			{theme === 'light' ? (
				<Moon className='h-5 w-5 transition-transform duration-500 rotate-0' />
			) : (
				<Sun className='h-5 w-5 transition-transform duration-500 rotate-90' />
			)}
		</Button>
	)
}
