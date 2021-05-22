import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Chips = (props) => {
	return (
		<View style={styles.chip}>
			<Text style={styles.text}>{props.children}</Text>
		</View>
	);
};

export default Chips;

const styles = StyleSheet.create({
	chip: {
		backgroundColor: 'rgba(0,0,0,0.18)',
		borderRadius: 25,
		paddingHorizontal: 14,
		paddingVertical: 8,
		marginRight: 16,
		marginVertical: 25,
	},
	text: {
		color: '#fff',
	},
});
