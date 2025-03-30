export default function VerifyEmail() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<div className='bg-white p-6 rounded-lg shadow-md w-96 text-center'>
				<p className='text-lg font-semibold text-green-600'>
					Muvaffaqiyatli tasdiqlandi! ✅
				</p>
				<p className='text-sm text-gray-500 mt-2'>
					Sizning email tasdiqlandi. Endi tizimga kirishingiz mumkin.
				</p>
			</div>
		</div>
	)
}
