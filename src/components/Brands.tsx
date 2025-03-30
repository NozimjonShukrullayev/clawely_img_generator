// src/Brands.js

const brands = [
	{ id: 1, logo: 'Clawely' },
	{ id: 2, logo: 'Gemini' },
	{ id: 3, logo: 'Clawely' },
	{ id: 4, logo: 'Gemini' },
	{ id: 5, logo: 'Clawely' },
	{ id: 6, logo: 'Gemini' },
	{ id: 7, logo: 'Clawely' },
	{ id: 8, logo: 'Gemini' },
	{ id: 9, logo: 'Clawely' },
	{ id: 10, logo: 'Gemini' },
	{ id: 11, logo: 'Clawely' },
	{ id: 12, logo: 'Gemini' },
	{ id: 13, logo: 'Clawely' },
	{ id: 14, logo: 'Gemini' },
	{ id: 15, logo: 'Clawely' },
	{ id: 16, logo: 'Gemini' },
	{ id: 17, logo: 'Clawely' },
	{ id: 18, logo: 'Gemini' },
	{ id: 19, logo: 'Clawely' },
	{ id: 20, logo: 'Gemini' },
	{ id: 21, logo: 'Clawely' },
	{ id: 22, logo: 'Gemini' },
	{ id: 23, logo: 'Clawely' },
	{ id: 24, logo: 'Gemini' },
	// Add more brands as needed
]

const Brands = () => {
	return (
		<div className='overflow-hidden whitespace-nowrap'>
			<div className='flex animate-scroll gap-5'>
				{brands.map(brand => (
					<div key={brand.id} className='flex-shrink-0'>
						{/* <img src={brand.logo} alt={`Brand ${brand.id}`} className='h-16' /> */}
						<span className='text-4xl bg-gradient-to-b  from-purple-100 to-gray-600 font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2'>
							{brand.logo}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Brands
