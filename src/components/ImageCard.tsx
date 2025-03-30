import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { downloadImage } from '@/services/imageService'
import { Download } from 'lucide-react'
import { useState } from 'react'

interface ImageCardProps {
	imageUrl: string
	imageId: string
}

export default function ImageCard({ imageUrl, imageId }: ImageCardProps) {
	const [isLoaded, setIsLoaded] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	const handleDownload = (format: string) => {
		const filename = `Clawely-image-${imageId}.${format.toLowerCase()}`
		downloadImage(imageUrl, filename)
	}

	return (
		<div
			className='relative rounded-2xl overflow-hidden group'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{!isLoaded && (
				<div className='absolute inset-0 bg-secondary animate-pulse flex items-center justify-center'>
					<div className='w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin'></div>
				</div>
			)}

			<img
				src={imageUrl}
				alt='Generated art'
				className={`w-full aspect-square object-cover transition-all duration-700 ${
					isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
				}`}
				onLoad={() => setIsLoaded(true)}
			/>

			{/* Overlay with download button */}
			<div
				className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex items-end transition-opacity duration-300 ${
					isHovered || !isLoaded ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							className='ml-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm'
							size='icon'
							aria-label='Download image'
						>
							<Download className='h-5 w-5' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end' className='w-36'>
						<DropdownMenuItem onClick={() => handleDownload('PNG')}>
							PNG formatida
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => handleDownload('JPEG')}>
							JPEG formatida
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => handleDownload('WEBP')}>
							WEBP formatida
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}
