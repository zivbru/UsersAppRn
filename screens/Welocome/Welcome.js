import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppStyles} from '../../components/UI/AppStyles';
import {connect} from 'react-redux';
import Button from 'react-native-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {authenticate} from '../../store/actions/auth';
import PropTypes from 'prop-types';

const Welcome = ({navigation, authenticate}) => {
  const tryToLoginFirst = async () => {
    try {
      let user;
      const email = await AsyncStorage.getItem('@loggedInUserID:email');
      const password = await AsyncStorage.getItem('@loggedInUserID:password');
      const id = await AsyncStorage.getItem('@loggedInUserID:id');
      if (
        id != null &&
        id.length > 0 &&
        password != null &&
        password.length > 0
      ) {
        const response = auth().signInWithEmailAndPassword(email, password);
        user = response.user;
        if (user && user._data) {
          authenticate(user._data);
        } else {
          setAlert('User does not exist. Please try again.', 'danger');
        }
      }

      const accessToken = await AsyncStorage.getItem(
        '@loggedInUserID:facebookCredentialAccessToken',
      );
      if (
        id != null &&
        id.length > 0 &&
        accessToken != null &&
        accessToken.length > 0
      ) {
        const facebookCredential = auth.FacebookAuthProvider.credential(
          accessToken,
        );
        const response = await auth().signInWithCredential(facebookCredential);
        user = response.user;
        authenticate(user);
      }
    } catch (error) {
      console.log(error);
      if (error) {
        setAlert('Please try again! ' + error, 'danger');
      }
    }
  };

  useEffect(() => {
    tryToLoginFirst();
  }, [tryToLoginFirst]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Button
        containerStyle={styles.loginContainer}
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}>
        Log In
      </Button>
      <Button
        containerStyle={styles.signupContainer}
        style={styles.signupText}
        onPress={() => navigation.navigate('SignUp')}>
        Sign Up
      </Button>
    </View>
  );
};

Welcome.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default connect(null, {authenticate})(Welcome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.tint,
    marginTop: 15,
  },
  signupText: {
    color: AppStyles.color.tint,
  },
  spinner: {
    marginTop: 200,
  },
});
