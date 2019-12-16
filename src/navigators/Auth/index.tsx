import React, { useState, useEffect } from 'react';

import { NavigationNativeContainer } from '@react-navigation/native';

import Realm from 'realm';

import Login from '../../screens/Login';
import App from '../App';

const AuthNavigator: React.FC = props => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    //TODO: Call Realm get credentials
  }, []);

  return (
     <NavigationNativeContainer>
        {
          isLoggedIn ? <App/> : <Login/>
        }
    </NavigationNativeContainer>
  )
};

export default AuthNavigator;