import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HeaderAdmin() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Header Admin</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		padding: 10,
	},
	text: {
		color: 'white',
		textAlign: 'center',
		fontSize: 24,
	},
});
