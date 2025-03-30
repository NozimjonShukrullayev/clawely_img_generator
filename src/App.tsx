import { Toaster as Sonner } from '@/components/ui/sonner'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AuthProvider } from '@/context/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import AuthCallback from './pages/AuthCallback'
import Index from './pages/index'
import NotFound from './pages/NotFound'

const queryClient = new QueryClient()

const App = () => (
	<QueryClientProvider client={queryClient}>
		<AuthProvider>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Index />} />
						<Route path='/auth' element={<Auth />} />
						<Route path='/auth/callback' element={<AuthCallback />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</TooltipProvider>
		</AuthProvider>
	</QueryClientProvider>
)

export default App
