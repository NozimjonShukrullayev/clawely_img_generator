import AuthForm from '@/components/AuthForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Auth() {
	return (
		<div className='min-h-screen flex flex-col'>
			<Navbar />
			<main className='flex-1 flex items-center justify-center py-20 px-4 mt-20'>
				<div className='w-full max-w-md'>
					<AuthForm />
				</div>
			</main>
			<Footer />
		</div>
	)
}
