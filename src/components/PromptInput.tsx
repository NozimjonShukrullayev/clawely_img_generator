import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/context/AuthContext'
import { toast } from '@/hooks/use-toast'
import { generateImages } from '@/services/imageService'
import { SendIcon } from 'lucide-react'
import { useState } from 'react'

interface PromptInputProps {
	onImagesGenerated: (images: any[]) => void
	setIsLoading: (isLoading: boolean) => void
}

export default function PromptInput({
	onImagesGenerated,
	setIsLoading,
}: PromptInputProps) {
	const [prompt, setPrompt] = useState('')
	const { user } = useAuth()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!prompt.trim()) {
			toast({
				title: 'Prompt kiritilmadi',
				description: 'Iltimos, rasm generatsiya qilish uchun prompt kiriting',
				variant: 'destructive',
			})
			return
		}

		if (!user) {
			toast({
				title: "Ro'yxatdan o'tmagansiz",
				description:
					"Rasm generatsiya qilish uchun ro'yxatdan o'ting yoki tizimga kiring",
				variant: 'destructive',
			})
			return
		}

		try {
			setIsLoading(true)
			const images = await generateImages(prompt)
			onImagesGenerated(images)

			toast({
				title: 'Rasm generatsiya qilindi',
				description: "Sizning so'rovingiz bo'yicha rasmlar tayyorlandi",
			})
		} catch (error) {
			console.error('Error generating images:', error)
		} finally {
			setIsLoading(false)
		}
	}

	const handleSendClick = () => {
		if (!user) {
			// Redirect to auth page if user is not logged in
			window.location.href = '/auth?mode=sign-in'
			return
		}

		// Submit the form if user is logged in
		handleSubmit(new Event('submit') as any)
	}

	return (
		<section id='prompt-section' className='py-20 scroll-mt-20'>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl mx-auto'>
					<h2 className='text-3xl font-bold mb-6 text-center'>
						Tasavvuringizni tasvirga aylantiring
					</h2>
					<p className='text-muted-foreground text-center mb-8'>
						Rasm yaratish uchun xohlaganingizni tavsiflab bering. Qanchalik
						batafsilroq bo'lsa, natija shunchalik yaxshi bo'ladi. (Tavsiya
						qilinadi: ingliz tilida)
					</p>

					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='relative'>
							<Textarea
								placeholder='Iltimos, rasm generatsiya qilish uchun prompt kiriting...'
								value={prompt}
								onChange={e => setPrompt(e.target.value)}
								className='min-h-32 p-4 focus:ring-accent pr-14'
							/>
							<Button
								type='button'
								onClick={handleSendClick}
								className='absolute right-3 bottom-3 bg-accent hover:bg-accent/90 text-white'
								size='icon'
							>
								<SendIcon className='h-5 w-5' />
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
