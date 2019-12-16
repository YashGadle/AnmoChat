import React from 'react';

import { StatusBar } from 'react-native';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import AuthNavigator from './navigators/Auth';
import { ApolloAPI } from './components/Apollo';

const appTheme = require('./custom-theme.json');
const theme = { ...darkTheme, ...appTheme };

const App = () => {
	return (
		<ApplicationProvider mapping={mapping} theme={theme}>
			<IconRegistry icons={EvaIconsPack} />
			<ApolloAPI token="">
				<StatusBar barStyle="dark-content" />
				<AuthNavigator />
			</ApolloAPI>
		</ApplicationProvider>
	);
};

export default App;
