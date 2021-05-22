import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../store/HomeScreen';
import React from 'react';
import TicketsScreen from '../store/TicketsScreen';
import { AntDesign, Foundation, Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const Navigation = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="home"
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

const tabNavigation = () => (
	<NavigationContainer>
		<Tabs.Navigator
			screenOptions={({ route, color, size }) => ({
				headerTitleAlign: 'center',
				headerTitleStyle: {
					textTransform: 'capitalize',
					fontWeight: 'bold',
				},
				cardStyle: {
					backgroundColor: '#F0EDED',
				},
				headerStyle: {
					borderRadius: 15,
				},
				tabBarIcon: ({ focused, size, color }) => {
					switch (route.name) {
						case 'Home':
							return focused ? (
								<Foundation name="home" size={size} color={color} />
							) : (
								<AntDesign name="home" size={size} color={color} />
							);
						case 'Tickets':
							return focused ? (
								<Foundation name="ticket" size={size} color={color} />
							) : (
								<Entypo name="ticket" size={size} color={color} />
							);
					}
				},
				tabBarActiveTintColor: Colors.primaryColor,
				tabBarShowLabel: false,
			})}
		>
			<Tabs.Screen name="Home" component={Navigation} />
			<Tabs.Screen
				name="Tickets"
				component={TicketsScreen}
				options={{ headerShown: false }}
			/>
		</Tabs.Navigator>
	</NavigationContainer>
);

export default tabNavigation;
