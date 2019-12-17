import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { withStyles, ThemedStyleType } from '@ui-kitten/components';

import Profile from '../../screens/Profile';
import Home from '../../screens/Home';
import { User } from '../../Realm';

const Stack = createStackNavigator();

interface Props {
	onSignout: () => void;
	userDetails: User;
	themedStyle?: ThemedStyleType;
}

const AppNavigator: React.FC<Props> = props => {
	const { onSignout, userDetails, themedStyle } = props;

	return (
		<Stack.Navigator
			headerMode="screen"
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					...themedStyle.headerBackgroundColor
				},
				headerTitleStyle: {
					...themedStyle.headerTextColor
				}
			}}
		>
			<Stack.Screen
				name="Profile"
				component={props => (
					<Profile onSignout={onSignout} userDetails={userDetails} {...props} />
				)}
			/>
			<Stack.Screen name="Home" component={props => <Home {...props} />} />
			<Stack.Screen name="Chat" component={props => <Home {...props} />} />
		</Stack.Navigator>
	);
};

export default withStyles(AppNavigator, theme => ({
	headerTextColor: { color: theme['color-primary-100'] },
	headerBackgroundColor: { backgroundColor: theme['color-basic-700'] }
}));
