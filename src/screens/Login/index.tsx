import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

interface Props {}

export const Login: React.FC<Props> = props => {
	const {} = props;

	const { data, loading, error } = useQuery(gql`
		query MyQuery {
			user {
				id
			}
		}
	`);

	if (loading) return <Text>Loading...</Text>;

	if (error) return <Text>Error...{error.message}</Text>;

	return (
		<View>
			<Text>{JSON.stringify(data)}</Text>
		</View>
	);
};

export default Login;
