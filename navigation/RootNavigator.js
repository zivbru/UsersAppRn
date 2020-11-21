import React from 'react';
import {useSelector} from 'react-redux';
import {UsersNavigator, AuthNavigator} from './AppNavigation';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigator = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      {isAuth ? <UsersNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
