import { AntDesign, Feather } from '@expo/vector-icons';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

const CollectionsCard = () => {
	return (
		<View style={styles.imageContainer}>
			<ImageBackground
				source={require('../assets/images/Bitmap2.png')}
				style={{ flex: 1 }}
			>
				<View style={{ padding: 10, flex: 1 }}>
					<View style={{ flex: 1 }}>
						<Text style={styles.title}>Electronica Next Month</Text>
						<Text style={styles.subTitle}>
							<Feather
								name="music"
								size={12}
								color="#fff"
								style={{ marginRight: 10 }}
							/>
							{'   '}Electronica
						</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={styles.learnMore}>Learn More{'  '}</Text>
						<AntDesign name="arrowright" size={15} color="#fff" />
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

export default CollectionsCard;

const styles = StyleSheet.create({
	imageContainer: {
		height: 161,
		width: 340,
		borderRadius: 10,
		overflow: 'hidden',
		elevation: 8,
		marginHorizontal: 8,
	},
	title: {
		fontSize: 22,
		color: '#fff',
	},
	subTitle: {
		fontSize: 12,
		color: '#fff',
		textTransform: 'capitalize',
		marginVertical: 8,
	},
	learnMore: {
		color: '#fff',
		fontSize: 15,
	},
});
