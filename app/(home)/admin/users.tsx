import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function UserScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Liste des users</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
	},
});
