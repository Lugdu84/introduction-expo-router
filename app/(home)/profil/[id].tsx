import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, useLocalSearchParams } from 'expo-router';

export default function ProfilScreen() {
	const { id } = useLocalSearchParams();

	console.log('id', id);
	return (
		<View>
			<Text>ProfilScreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
