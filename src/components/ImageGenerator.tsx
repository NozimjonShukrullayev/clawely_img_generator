import { GeneratedImage } from '@/services/imageService'
import ImageCard from './ImageCard'

interface ImageGeneratorProps {
	generatedImages: GeneratedImage[]
	isLoading: boolean
}

export default function ImageGenerator({
	generatedImages,
	isLoading,
}: ImageGeneratorProps) {
	return (
		<section className='py-16'>
			<div className='container mx-auto px-4'>
				<div className='max-w-6xl mx-auto'>
					{isLoading ? (
						<div className='min-h-64 flex flex-col items-center justify-center'>
							<div className='relative w-20 h-20'>
								<div className='absolute inset-0 border-4 border-accent/30 rounded-full'></div>
								<div className='absolute inset-0 border-4 border-t-accent border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin'></div>
							</div>
							<p className='mt-6 text-muted-foreground'>
								Rasmlar yaratilmoqda...
							</p>
						</div>
					) : generatedImages.length > 0 ? (
						<>
							<h2 className='text-2xl font-bold mb-8 text-center'>
								Generatsiya qilingan rasmlar
							</h2>
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
								{generatedImages.map(image => (
									<ImageCard
										key={image.id}
										imageUrl={image.url}
										imageId={image.id}
									/>
								))}
							</div>
						</>
					) : null}
				</div>
			</div>
		</section>
	)
}
