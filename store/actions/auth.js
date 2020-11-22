import '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {AUTHENTICATE, LOGOUT} from '../types';
const FBSDK = require('react-native-fbsdk');
const {LoginManager, AccessToken} = FBSDK;
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authenticate = (user) => (dispatch) => {
  dispatch({type: AUTHENTICATE, user});
};

export const register = (fullName, phone, email, password) => async (
  dispatch,
) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    const userId = response.user._user.uid;
    const data = {
      email,
      fullName,
      phone,
      password,
    };

    await firestore().collection('users').doc(userId).set(data);

    const user = await firestore().collection('users').doc(userId).get();
    if (user && user._data) {
      AsyncStorage.setItem('@loggedInUserID:id', userId);
      AsyncStorage.setItem('@loggedInUserID:email', email);
      AsyncStorage.setItem('@loggedInUserID:password', password);
      dispatch(authenticate(user._data));
    } else {
      alert('Something went wrong.');
    }
  } catch (error) {
    if (error) {
      console.log(error);
      alert(error);
    }
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const userId = response.user.uid;
    const user = await firestore().collection('users').doc(userId).get();

    if (user && user._data) {
      AsyncStorage.setItem('@loggedInUserID:id', userId);
      AsyncStorage.setItem('@loggedInUserID:email', email);
      AsyncStorage.setItem('@loggedInUserID:password', password);

      dispatch(authenticate(user._data));
    } else {
      alert('User does not exist. Please try again.');
    }
  } catch (error) {
    console.log('error', error);
    if (error) {
      alert('Wrong Credentials');
    }
  }
};

export const facebooklogin = () => async (dispatch) => {
  try {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    const accessToken = data.accessToken;
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      accessToken,
    );

    const response = await auth().signInWithCredential(facebookCredential);
    const user = response.user;
    const userDict = {
      id: user.uid,
      fullName: user.displayName,
      email: user.email,
      profileURL: user.photoURL,
      phone: '',
    };

    firestore().collection('users').doc(user.uid).set(userDict);
    AsyncStorage.setItem(
      '@loggedInUserID:facebookCredentialAccessToken',
      accessToken,
    );
    AsyncStorage.setItem('@loggedInUserID:id', user.uid);

    dispatch(authenticate(user));
  } catch (error) {
    console.log(error);
    if (error) {
      alert('Please try again! ' + error);
    }
  }
};

export const logout = () => async (dispatch) => {
  try {
    AsyncStorage.removeItem('@loggedInUserID:id');
    AsyncStorage.removeItem('@loggedInUserID:key');
    AsyncStorage.removeItem('@loggedInUserID:password');
    dispatch({type: LOGOUT});
  } catch (error) {
    console.log(error);
    if (error) {
      alert('Could Not logout!');
    }
  }
};
