import HeaderAdmin from '@/components/HeaderAdmin';
import HeaderAdminScreen from '@/components/HeaderAdmin';
import { Slot, Stack } from 'expo-router';

export default function AdminLayout() {
	return (
		<>
			<HeaderAdmin />
			<Slot />
		</>
	);
}
