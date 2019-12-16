import React from 'react';

import { Text, Layout, Button } from '@ui-kitten/components';
import { User } from '../../Realm';

interface Props {
	userDetails: User;
	onSignout: () => void;
}

const Profile: React.FC<Props> = props => {
	const { onSignout, userDetails } = props;

	return (
		<Layout style={{ flex: 1 }}>
			<Text>Hi, {userDetails.alias}. This Is Your Profile!</Text>
			<Text>Your password is {userDetails.password}</Text>
			<Button onPress={onSignout}>Singout</Button>
		</Layout>
	);
};

export default Profile;
