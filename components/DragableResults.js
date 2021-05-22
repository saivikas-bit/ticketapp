import React from 'react';
import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const DragableResults = () => {
	return (
		<SafeAreaView>
			<View style={{ ...styles.buttonGroup, ...styles.card }}>
				<View
					style={{
						width: 88,
						height: 73,
						borderRadius: 10,
						overflow: 'hidden',
					}}
				>
					<ImageBackground
						style={{ flex: 1 }}
						source={require('../assets/images/Bitmap.png')}
						resizeMode="cover"
					/>
				</View>
				<View style={styles.cardBody1}>
					<View style={styles.buttonGroup}>
						<Text style={styles.cardBody}>Daboi Concer…</Text>
						<Text style={styles.cardBody}>FRIDAY AUG 24, 9PM</Text>
					</View>
					<Text style={styles.cardTitle}>Brightlight Music Festival</Text>
					<View style={styles.buttonGroup}>
						<View style={styles.buttonIcon}>
							<Feather name="music" size={16} color="black" />
							<Text style={{ fontSize: 12, marginHorizontal: 3 }}>
								india rock
							</Text>
						</View>
						<View style={styles.buttonIcon}>
							<Feather name="music" size={16} color="black" />
							<Text style={{ fontSize: 12, marginHorizontal: 3 }}>
								india rock
							</Text>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	buttonIcon: {
		// width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	cardBody1: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
	card: {
		height: 70,
		borderColor: '#ff0',
		paddingHorizontal: 12,
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	cardBody: {
		fontSize: 10,
		fontWeight: '400',
	},
	buttonGroup: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default DragableResults;
