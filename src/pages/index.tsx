import Brands from '@/components/Brands'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import ImageGenerator from '@/components/ImageGenerator'
import Navbar from '@/components/Navbar'
import PromptInput from '@/components/PromptInput'
import Testimonials from '@/components/Testimonials'
import { GeneratedImage } from '@/services/imageService'
import { useState } from 'react'

export default function Index() {
	const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([])
	const [isLoading, setIsLoading] = useState(false)

	return (
		<div className='min-h-screen flex flex-col'>
			<Navbar />
			<main className='flex-1'>
				<Hero />
				<PromptInput
					onImagesGenerated={setGeneratedImages}
					setIsLoading={setIsLoading}
				/>
				<ImageGenerator
					generatedImages={generatedImages}
					isLoading={isLoading}
				/>
				<Brands />
				<Gallery />
				<Testimonials />
			</main>
			<Footer />
		</div>
	)
}
