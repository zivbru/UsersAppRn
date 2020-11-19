import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUp/SignUp';
import LoginScreen from '../screens/Login/Login';
import WelcomeScreen from '../screens/Welocome/Welcome';
import UsersScreen from '../screens/Users/Users';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#001f3f',
  },
  headerTitleStyle: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  headerBackTitle: {
    fontFamily: 'sans-serif',
  },
  headerTintColor: '#7FDBFF',
};

const AuthStackNavigator = createStackNavigator();
export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <AuthStackNavigator.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStackNavigator.Screen name="Login" component={LoginScreen} />
      <AuthStackNavigator.Screen name="SignUp" component={SignUpScreen} />
    </AuthStackNavigator.Navigator>
  );
};

const UsersStackNavigator = createStackNavigator();
export const UsersNavigator = () => {
  return (
    <UsersStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <AuthStackNavigator.Screen name="Users" component={UsersScreen} />
    </UsersStackNavigator.Navigator>
  );
};
