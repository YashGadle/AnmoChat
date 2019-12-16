import React from 'react';

import { SafeAreaView } from 'react-native';

import { Text, Layout } from '@ui-kitten/components';

interface Props {}

export const Login: React.FC<Props> = props => {
	const {} = props;

	return (
		<Layout style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<Text>Hi This is Login!</Text>
			</SafeAreaView>
		</Layout>
	);
};

export default Login;
