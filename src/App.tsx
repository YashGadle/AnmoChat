import React, { Fragment } from 'react';

import { SafeAreaView, Text, StatusBar } from 'react-native';

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
