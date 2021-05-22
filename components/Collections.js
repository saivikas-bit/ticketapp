import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CollectionsCard from './CollectionsCard';
export default function Collections({ navigation }) {
	return (
		<View style={{ height: 250, paddingHorizontal: 10 }}>
			<Text style={styles.mainTitle}>Collections</Text>
			<ScrollView horizontal={true}>
				<CollectionsCard />
				<CollectionsCard />
				<CollectionsCard />
				<CollectionsCard />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	mainTitle: {
		fontSize: 28,
		fontWeight: 'bold',
		marginVertical: 12,
	},
});
