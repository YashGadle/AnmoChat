import React from 'react';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import { Text, Layout, Icon, Button } from '@ui-kitten/components';
import { styles } from './styles';

interface Props {
	navigation: StackNavigationProp<any>;
}

export const Home: React.FC<Props> = props => {
	const { navigation } = props;

	const navigateProfile = () => {
		navigation.push('Profile');
	};

	const navigateChat = () => {
		navigation.push('Chat');
	};

	navigation.setOptions({
		headerRight: () => (
			<TouchableWithoutFeedback onPress={navigateProfile}>
				<Icon name="person" style={{ width: 20, height: 20 }} />
			</TouchableWithoutFeedback>
		)
	});

	return (
		<Layout style={styles.container}>
			<Button onPress={navigateChat}>Go to Chat</Button>
		</Layout>
	);
};

export default Home;
