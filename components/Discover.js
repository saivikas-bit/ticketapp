import { Feather } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Discover() {
	return (
		<View style={{ height: 130, paddingHorizontal: 10 }}>
			<Text style={{ fontSize: 28, fontWeight: 'bold', marginVertical: 8 }}>
				Discover
			</Text>
			<View>
				<ScrollView horizontal={true} style={{ width: '100%' }}>
					<View
						style={{
							width: 145,
							height: 40,
							marginHorizontal: 10,
						}}
					>
						<View style={styles.card}>
							<View style={styles.icon}>
								<Feather name="map-pin" size={17} color="#FC1055" />
							</View>
							<Text style={styles.title}>YOUR AREA</Text>
						</View>
					</View>
					<View style={{ width: 145, height: 84, marginHorizontal: 10 }}>
						<View style={styles.card}>
							<View
								style={{ ...styles.icon, ...{ backgroundColor: '#ACCCFF' } }}
							>
								<Feather name="music" size={17} color="#5798FF" />
							</View>
							<Text style={{ ...styles.title, ...{ color: '#5798FF' } }}>
								MUSIC
							</Text>
						</View>
					</View>
					<View style={{ width: 145, height: 84, marginHorizontal: 10 }}>
						<View style={styles.card}>
							<View style={styles.icon}>
								<Feather name="map-pin" size={17} color="#FC1055" />
							</View>
							<Text style={styles.title}>YOUR AREA</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	icon: {
		borderRadius: 50,
		backgroundColor: '#FFC3D8',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 6,
		marginHorizontal: 4,
	},
	card: {
		borderRadius: 25,
		elevation: 1,
		flexDirection: 'row',
		padding: 10,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 12,
		color: '#FC1055',
	},
});
