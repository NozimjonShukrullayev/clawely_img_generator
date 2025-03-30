import { Testimonials1, Testimonials2, Testimonials3 } from '@/assets'

function Testimonials() {
	return (
		<div className='my-24 container'>
			<div className='text-center py-12'>
				<h1 className='text-3xl md:text-4xl font-bold'>
					Sizni
					<span className='text-gradient'> 4 milliondan ortiq </span>
					jamoa kutmoqda
				</h1>
				<p className='mt-4 text-gray-400'>
					Clawelyning kuchi bizning inqilobiy vositalarimizdan tashqarida - biz dunyodagi eng katta va eng qo'llab-quvvatlovchi sun'iy intellekt hamjamiyatlaridan birida joylashganmiz va biz bunga qattiq sodiqmiz..
				</p>
			</div>
			<div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-0'>
				<div className='text-center max-w-xs'>
					<p className='italic'>
						"Clawely menga o'zimni butunlay yangi va boshqacha tarzda ifodalash usulini berdi. AIsiz men faqat iste'molchi edim. Endi men yaratishim mumkin."
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
						"Claw AI tasvirlari olamida endigina yo'l boshlayotganlar uchun, shuningdek, ular bilan ishlash uchun keng ko'lamli vositalar taklif etiladigan professionallar uchun javob beradi."
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
						"Clawely o'zining kuchli nozik sozlangan modellari bilan sun'iy intellekt san'atini shabada qiladi. Hamjamiyat ham men hozirgacha topgan eng yaxshisidir!"
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
