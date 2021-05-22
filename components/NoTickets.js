import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	ImageBackground,
} from 'react-native';
import Chips from '../utils/Chips';

const NoTickets = () => {
	return (
		<>
			<View style={styles.bgimage}>
				<ImageBackground
					style={{ flex: 1 }}
					source={require('../assets/images/bg.png')}
				>
					<View style={styles.mainContainer}>
						<View>
							<Text style={styles.title}>Popular</Text>
							<ScrollView
								horizontal={true}
								showsHorizontalScrollIndicator={false}
							>
								<Chips>Phil Collins</Chips>
								<Chips>TV on the Radio</Chips>
								<Chips>FC Barcelona</Chips>
							</ScrollView>
						</View>
					</View>
				</ImageBackground>
			</View>
			<Text style={styles.noTicket}>No tickets bought</Text>
			<Text style={styles.desc}>
				It appears you haven’t bought any tickets yet. Maybe try searching
				these?
			</Text>
		</>
	);
};

export default NoTickets;

const styles = StyleSheet.create({
	bgimage: {
		height: 552,
		width: '100%',
	},
	title: {
		color: '#fff',
		fontSize: 28,
		fontWeight: 'bold',
	},
	mainContainer: {
		paddingVertical: 102,
		paddingHorizontal: 18,
	},
	noTicket: {
		marginHorizontal: 64,
		marginVertical: 16,
		fontSize: 28,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	desc: {
		textAlign: 'center',
		fontSize: 15,
		marginHorizontal: 20,
		fontWeight: 'normal',
		opacity: 0.3,
	},
});
