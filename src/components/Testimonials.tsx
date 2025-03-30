import { Testimonials1, Testimonials2, Testimonials3 } from '@/assets'

function Testimonials() {
	return (
		<div className='my-24 container'>
			<div className='text-center py-12'>
				<h1 className='text-3xl md:text-4xl font-bold'>
					A community of over
					<span className='text-gradient'> 4 million </span>
					is waiting for you
				</h1>
				<p className='mt-4 text-gray-400'>
					Clawely's power extends beyond our revolutionary tools — we are
					anchored in one of the largest and most supportive AI communities
					worldwide, and we're deeply committed to it.
				</p>
			</div>
			<div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-0'>
				<div className='text-center max-w-xs'>
					<p className='italic'>
						"Clawely gave me a way of expressing myself in a completely new and
						different way. Without AI I was only a consumer. Now I can create."
					</p>
					<div className='flex items-center justify-center mt-4'>
						<img
							alt='Profile picture of Malakai030'
							className='rounded-full w-10 h-10'
							height='40'
							src={Testimonials1}
							width='40'
						/>
						<span className='ml-2'>Malakai030</span>
					</div>
				</div>
				<div className='text-center max-w-xs'>
					<p className='italic'>
						"Leo is suitable for those who are just starting their way in the
						world of AI images, as well as for professionals, who are offered a
						wide range of tools to work with."
					</p>
					<div className='flex items-center justify-center mt-4'>
						<img
							alt='Profile picture of Raini Studios'
							className='rounded-full w-10 h-10'
							height='40'
							src={Testimonials2}
							width='40'
						/>
						<span className='ml-2'>Raini W</span>
					</div>
				</div>
				<div className='text-center max-w-xs'>
					<p className='italic'>
						"With its powerful fine-tuned models Clawely makes AI art a breeze.
						The community is also the best I've found to date!"
					</p>
					<div className='flex items-center justify-center mt-4'>
						<img
							alt='Profile picture of Dee Does AI'
							className='rounded-full w-10 h-10'
							height='40'
							src={Testimonials3}
							width='40'
						/>
						<span className='ml-2'>Dee Does AI</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
