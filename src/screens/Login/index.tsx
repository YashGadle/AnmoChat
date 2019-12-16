import React, { useState } from 'react';

import { SafeAreaView, View, KeyboardAvoidingView } from 'react-native';

import {
	Layout,
	Input,
	Icon,
	StyleType,
	Button,
	Text
} from '@ui-kitten/components';
import { styles } from './styles';

interface Props {
	email: string;
	password: string;
}

export const Login: React.FC<Props> = props => {
	const [email, setEmail] = useState(props.email);
	const [emailInvalid, setEmailInvalid] = useState('');

	const [password, setPassword] = useState(props.password);
	const [passwordInvalid, setPasswordInvalid] = useState('');

	const [secureText, setSecureText] = useState(true);

	const renderPasswordVisibilityToggleIcon = (style: StyleType) => (
		<Icon {...style} name={secureText ? 'eye-off' : 'eye'} />
	);

	const onPasswordVisibilityToggleIconPress = () => setSecureText(!secureText);

	const onEmailChange = (text: string) => setEmail(text);

	const onPasswordChange = (text: string) => setPassword(text);

	const onSubmit = () => {
		//TODO: Call login service and store in realm
	};

	return (
		<Layout style={{ flex: 1 }}>
			<SafeAreaView style={styles.container}>
				<View>
					<Text category="h2">Anmo Chat</Text>
				</View>
				<KeyboardAvoidingView style={styles.textInputContainer}>
					<Input
						label="Email Address"
						placeholder="thomas.shelby@shelbycorp.com"
						value={email}
						autoFocus
						textContentType="emailAddress"
						autoCapitalize="none"
						onChangeText={onEmailChange}
					/>
					<Input
						label="Password"
						placeholder="********"
						value={password}
						secureTextEntry={secureText}
						icon={renderPasswordVisibilityToggleIcon}
						onIconPress={onPasswordVisibilityToggleIconPress}
						textContentType="password"
						onChangeText={onPasswordChange}
					/>
					<Button style={styles.button} appearance="filled" onPress={onSubmit}>
						Sign In
					</Button>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</Layout>
	);
};

export default Login;
