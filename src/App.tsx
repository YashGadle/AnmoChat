import React, { Fragment } from 'react';

import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<Text>Yash gadle is a beast</Text>
			</SafeAreaView>
		</Fragment>
	);
};

export default App;
