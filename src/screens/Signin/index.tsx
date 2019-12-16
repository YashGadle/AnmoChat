import React, { useState } from 'react';

import {
	SafeAreaView,
	View,
	KeyboardAvoidingView,
	Platform
} from 'react-native';

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
	alias: string;
	password: string;
	onSignin: (alias: string, password: string) => void;
}

export const Signin: React.FC<Props> = props => {
	const [alias, setAlias] = useState(props.alias);
	const [aliasInvalid, setAliasInvalid] = useState('');

	const [password, setPassword] = useState(props.password);
	const [passwordInvalid, setPasswordInvalid] = useState('');

	const [secureText, setSecureText] = useState(true);

	const renderPasswordVisibilityToggleIcon = (style: StyleType) => (
		<Icon {...style} name={secureText ? 'eye-off' : 'eye'} />
	);

	const onPasswordVisibilityToggleIconPress = () => setSecureText(!secureText);

	const onAliasChange = (text: string) => setAlias(text);

	const onPasswordChange = (text: string) => setPassword(text);

	const onSubmit = () => {
		//TODO: Call Signin service and store in realm
		props.onSignin(alias, password);
	};

	return (
		<Layout style={{ flex: 1 }}>
			<SafeAreaView style={styles.container}>
				<View>
					<Text category="h2">Anmo Chat</Text>
				</View>
				<KeyboardAvoidingView
					style={styles.textInputContainer}
					behavior={Platform.OS === 'ios' ? 'padding' : null}
				>
					<Input
						label="Alias"
						placeholder="Create a unique nickname like - sweet potato"
						value={alias}
						autoFocus
						maxLength={20}
						textContentType="emailAddress"
						autoCapitalize="none"
						onChangeText={onAliasChange}
					/>
					<Input
						label="Password"
						placeholder="Enter a strong password"
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

export default Signin;
