import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import { LogOut } from 'lucide-react'

export default function LogoutDialog() {
	const { signOut } = useAuth()

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant='ghost'>
					<LogOut className='w-4 h-4 mr-2' />
					Chiqish
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Tizimdan chiqishni tasdiqlaysizmi?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Tizimdan chiqsangiz, qayta login qilishingiz kerak bo'ladi.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Bekor qilish</AlertDialogCancel>
					<AlertDialogAction onClick={signOut}>Chiqish</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
