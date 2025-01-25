import { Link, router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Index() {
	const id = 3;
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Link href={'/settings'}>Go to settings</Link>
			<Link href={'/about'}>Go to about</Link>
			<Button
				title="Go to settings"
				onPress={() => router.push('/settings')}
			/>
			<Link href={`/profil/${id}`}>Go to profil</Link>
			<Link href={{ pathname: '/profil/[id]', params: { id } }}>
				Go to profil
			</Link>
			<Button
				title="Go to profil"
				onPress={() => router.push(`/profil/${id}`)}
			/>
		</View>
	);
}
