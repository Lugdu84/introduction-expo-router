import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRootNavigationState } from 'expo-router';

export default function AboutScreen() {
	const { routes } = useRootNavigationState();

	console.log('routes', routes);
	return (
		<View>
			<Text>AboutScreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
