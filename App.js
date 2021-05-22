import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DragableResults from './components/DragableResults';
import Navigation from './navigation/Navigation';

export default function App() {
	return <Navigation />;
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 80,
	},
});
