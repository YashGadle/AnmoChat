import React, { Fragment } from 'react';

import { SafeAreaView, Text, StatusBar,View } from 'react-native';

import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';

import { ApolloAPI } from './components/Apollo';

const Stack = createStackNavigator();

const Ex = () => (
	<View style={{flex:1,alignItems: 'center', justifyContent: 'center' }}>
		<Text>Yash gadle</Text>
	</View>
)

const App = () => {
	return (
		<ApolloAPI token="">
			<StatusBar barStyle="dark-content" />
				<NavigationNativeContainer>
					<Stack.Navigator initialRouteName='LoginScreen'>
						<Stack.Screen name="LoginScreen" component={Login} />
						<Stack.Screen name="Ex" component={Ex} />
					</Stack.Navigator>
				</NavigationNativeContainer>
		</ApolloAPI>
	);
};

export default App;
