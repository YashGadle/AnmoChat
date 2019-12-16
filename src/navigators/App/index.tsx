import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../screens/Profile';
import { User } from '../../Realm';

const Stack = createStackNavigator();

interface Props {
	onSignout: () => void;
	userDetails: User;
}

const AppNavigator: React.FC<Props> = props => {
	const { onSignout, userDetails } = props;
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Profile"
				component={() => (
					<Profile onSignout={onSignout} userDetails={userDetails} />
				)}
			/>
		</Stack.Navigator>
	);
};

export default AppNavigator;
