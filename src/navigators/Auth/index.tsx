import React, { useState, useEffect } from 'react';

import { NavigationNativeContainer } from '@react-navigation/native';

import Signin from '../../screens/Signin';
import AppNavigator from '../App';
import { realm, User } from '../../Realm';

const AuthNavigator: React.FC = props => {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [userDetails, setUserDetails] = useState(undefined as User);

	useEffect(() => {
		let user = realm.objects<User>(User.schemaName);
		if (user.length !== 0) {
			setLoggedIn(true);
			setUserDetails(getUserFromRealmObject(user));
		}
	}, []);

	const getUserFromRealmObject = (obj: Realm.Results<User & Realm.Object>) => {
		const res = Array.from(obj.values())[0];

		return { alias: res.alias, password: res.password };
	};

	const onSignin = (alias: string, password: string) => {
		let user = realm.objects<User>(User.schemaName);
		realm.write(() => {
			realm.create(User.schemaName, {
				alias,
				password
			});
		});
		if (user.length === 1) {
			setLoggedIn(true);
			setUserDetails(getUserFromRealmObject(user));
		} else {
			//TODO: Show snackbar error
			setLoggedIn(false);
		}
	};

	const onSignout = () => {
		let user = realm.objects(User.schemaName);
		realm.write(() => {
			realm.delete(user);
		});
		if (user.length === 0) setLoggedIn(false);
	};

	return (
		<NavigationNativeContainer>
			{isLoggedIn ? (
				<AppNavigator onSignout={onSignout} userDetails={userDetails} />
			) : (
				<Signin onSignin={onSignin} alias="" password="" />
			)}
		</NavigationNativeContainer>
	);
};

export default AuthNavigator;
