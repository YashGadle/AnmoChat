import React, { Fragment } from 'react';

import { SafeAreaView, Text, StatusBar,View } from 'react-native';

import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {ApplicationProvider} from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';

import Login from './screens/Login';

import { ApolloAPI } from './components/Apollo';

const Stack = createStackNavigator();

const appTheme = require('./custom-theme.json');
const theme = {...darkTheme, ...appTheme}

const Ex = () => (
	<View style={{flex:1,alignItems: 'center', justifyContent: 'center' }}>
		<Text>Yash gadle</Text>
	</View>
)

const App = () => {
	return (
		<ApplicationProvider mapping={mapping} theme={theme}>
		<ApolloAPI token="">
			<StatusBar barStyle="dark-content" />
				<NavigationNativeContainer>
					<Stack.Navigator initialRouteName='LoginScreen'>
						<Stack.Screen name="LoginScreen" component={Login} />
						<Stack.Screen name="Ex" component={Ex} />
					</Stack.Navigator>
				</NavigationNativeContainer>
		</ApolloAPI>
		</ApplicationProvider>
	);
};

export default App;
