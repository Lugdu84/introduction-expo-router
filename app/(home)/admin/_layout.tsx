import HeaderAdmin from '@/components/HeaderAdmin';
import { Slot } from 'expo-router';

export default function AdminLayout() {
	return (
		<>
			<HeaderAdmin />
			<Slot />
		</>
	);
}
