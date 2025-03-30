import {
	Gallery1,
	Gallery2,
	Gallery3,
	Gallery4,
	Gallery5,
	Gallery6,
} from '@/assets'
import { useEffect, useState } from 'react'
import ImageCard from './ImageCard'

const exampleImages = [
	{
		url: Gallery1,
		id: 'gallery1',
	},
	{
		url: Gallery2,
		id: 'gallery2',
	},
	{
		url: Gallery3,
		id: 'gallery3',
	},
	{
		url: Gallery4,
		id: 'gallery4',
	},
	{
		url: Gallery5,
		id: 'gallery5',
	},
	{
		url: Gallery6,
		id: 'gallery6',
	},
]

export default function Gallery() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.1 }
		)

		const gallerySection = document.getElementById('gallery-section')
		if (gallerySection) {
			observer.observe(gallerySection)
		}

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<section id='gallery-section' className='py-20 bg-secondary/30'>
			<div className='container mx-auto px-4'>
				<div className='text-center max-w-3xl mx-auto mb-12'>
					<h2 className='text-3xl font-bold mb-4'>
						Ilhom olish uchun namunalar
					</h2>
					<p className='text-muted-foreground'>
						Bizning foydalanuvchilarimiz tomonidan yaratilgan ajoyib asarlarni
						ko'ring va o'z g'oyalaringiz uchun ilhom oling.
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
					{exampleImages.map((image, index) => (
						<div
							key={image.id}
							className={`transition-all duration-700 ${
								isVisible
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<ImageCard imageUrl={image.url} imageId={image.id} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
