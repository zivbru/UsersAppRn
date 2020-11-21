import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUp/SignUp';
import LoginScreen from '../screens/Login/Login';
import WelcomeScreen from '../screens/Welocome/Welcome';
import UsersScreen from '../screens/Users/Users';
import CreateNewUser from '../screens/Users/CreateNewUser';
import {AppStyles} from '../components/UI/AppStyles';

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
      <AuthStackNavigator.Screen
        name="CreateNewUser"
        component={CreateNewUser}
      />
    </UsersStackNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: 'black',
    flex: 1,
    fontFamily: AppStyles.fontName.main,
  },
  btn: {
    backgroundColor: '#0074D9',
    color: '#0074D9',
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: 25,
  },
});
