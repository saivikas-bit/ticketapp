import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Collections from '../components/Collections';
import Discover from '../components/Discover';

export default function HomeScreen({ navigation }) {
	return (
		<ScrollView style={{ flex: 1 }}>
			<View>
				<Collections navigation={navigation} />
				<Discover />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
