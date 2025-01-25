import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function SettingScreen() {
	return (
		<View>
			<Text>SettingScreen</Text>
			<Link href={'/about'}>Go to about</Link>
		</View>
	);
}

const styles = StyleSheet.create({});
