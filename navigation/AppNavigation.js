import React from 'react';
import {Platform} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUp/SignUp';
import LoginScreen from '../screens/Login/Login';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  headerBackTitle: {
    fontFamily: 'sans-serif',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const AuthStackNavigator = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <AuthStackNavigator.Screen name="Login" component={LoginScreen} />
      <AuthStackNavigator.Screen name="SignUp" component={SignUpScreen} />
    </AuthStackNavigator.Navigator>
  );
};

const RootNavigator = createStackNavigator(
  {
    AuthStack: {screen: AuthNavigator},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'AuthStack',
    // transitionConfig: noTransitionConfig,
    navigationOptions: ({navigation}) => ({
      color: 'black',
    }),
  },
);

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: 'black',
    flex: 1,
    fontFamily: AppStyles.fontName.main,
  },
});
