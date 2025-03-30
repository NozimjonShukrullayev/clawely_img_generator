import { toast } from '@/hooks/use-toast'

export interface GeneratedImage {
	url: string
	id: string
}

import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = import.meta.env.VITE_GEMINI_VITE_API_KEY
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
	model: 'gemini-2.0-flash-exp-image-generation',
})

export interface GeneratedImage {
	url: string
	id: string
}

export async function generateImages(
	prompt: string
): Promise<GeneratedImage[]> {
	try {
		const chatSession = model.startChat({
			generationConfig: {
				temperature: 1,
				topP: 0.95,
				topK: 40,
				maxOutputTokens: 8192,
				responseModalities: ['image', 'text'],
				responseMimeType: 'text/plain',
			},
			history: [],
		})

		const result = await chatSession.sendMessage(prompt)
		const candidates = result.response.candidates
		const images: GeneratedImage[] = []

		candidates.forEach((candidate, candidateIndex) => {
			candidate.content.parts.forEach((part, partIndex) => {
				if (part.inlineData) {
					const base64Image = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`
					images.push({
						url: base64Image,
						id: `img-${candidateIndex}-${partIndex}-${Date.now()}`,
					})
				}
			})
		})

		return images
	} catch (error) {
		console.error('Image generation failed:', error)
		return []
	}
}

export function downloadImage(
	imageUrl: string,
	filename: string = 'generated-image.png'
) {
	try {
		// For remote images, we need to fetch them first
		if (imageUrl.startsWith('http')) {
			toast({
				title: 'Rasm yuklab olinmoqda',
				description: 'Iltimos kuting...',
			})

			// Create a canvas to convert the image to the desired format
			const canvas = document.createElement('canvas')
			const ctx = canvas.getContext('2d')
			const img = new Image()

			img.crossOrigin = 'anonymous' // This enables CORS

			// Remove any timestamp or query parameters for fetching
			const cleanImageUrl = imageUrl.split('&t=')[0]
			img.src = cleanImageUrl

			img.onload = () => {
				canvas.width = img.width
				canvas.height = img.height
				ctx?.drawImage(img, 0, 0)

				// Determine the MIME type based on the filename extension
				let mimeType = 'image/png'
				if (
					filename.toLowerCase().endsWith('.jpg') ||
					filename.toLowerCase().endsWith('.jpeg')
				) {
					mimeType = 'image/jpeg'
				} else if (filename.toLowerCase().endsWith('.webp')) {
					mimeType = 'image/webp'
				}

				// Convert canvas to data URL with the specified format
				const dataUrl = canvas.toDataURL(mimeType)

				// Create temporary link and trigger download
				const link = document.createElement('a')
				link.href = dataUrl
				link.download = filename
				document.body.appendChild(link)
				link.click()
				document.body.removeChild(link)

				toast({
					title: 'Rasm yuklab olindi',
					description: `${filename} faylingiz yuklandi`,
				})
			}

			img.onerror = () => {
				toast({
					title: 'Xatolik yuz berdi',
					description: 'Rasmni yuklab olishda xatolik yuz berdi',
					variant: 'destructive',
				})
			}
		} else {
			// For data URLs (base64), we can download directly
			const link = document.createElement('a')
			link.href = imageUrl
			link.download = filename
			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)

			toast({
				title: 'Rasm yuklab olindi',
				description: `${filename} faylingiz yuklandi`,
			})
		}
	} catch (error) {
		console.error('Error downloading image:', error)
		toast({
			title: 'Xatolik yuz berdi',
			description: 'Rasmni yuklab olishda xatolik yuz berdi',
			variant: 'destructive',
		})
	}
}
