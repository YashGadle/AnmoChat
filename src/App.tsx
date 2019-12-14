import React, { Fragment } from 'react';

import { SafeAreaView, Text, StatusBar } from 'react-native';

import Login from './screens/Login';

import { ApolloAPI } from './components/Apollo';

const App = () => {
	return (
		<ApolloAPI token="">
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<Login />
			</SafeAreaView>
		</ApolloAPI>
	);
};

export default App;
