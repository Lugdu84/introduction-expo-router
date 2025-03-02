import { Link, router } from 'expo-router';
import { Button, StyleSheet, View } from 'react-native';

export default function Index() {
	const id = 3;
	return (
		<View style={styles.container}>
			<Link
				style={styles.link}
				href={'/settings'}>
				Go to settings with link
			</Link>
			<Link
				style={styles.link}
				href={'/about'}>
				Go to about
			</Link>
			<Button
				title="Go to settings"
				onPress={() => router.push('/settings')}
			/>
			<Link
				style={styles.link}
				href={`/profil/${id}`}>
				Go to profil with link
			</Link>
			<Link
				style={styles.link}
				href={{ pathname: '/profil/[id]', params: { id } }}>
				Go to profil with link
			</Link>
			<Button
				title="Go to profil with router"
				onPress={() => router.push(`/profil/${id}`)}
			/>
			<Link
				style={styles.link}
				href={'/admin/videos'}>
				Go to admin vidéos
			</Link>
			<Link
				style={styles.link}
				href="/admin/users">
				Go to admin users
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
	},
	link: {
		color: '#0A6BF2FF',
		fontSize: 16,
	},
});
