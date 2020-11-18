import {setAlert} from './alert';
import '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {AUTHENTICATE} from '../types';

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
    };

    await firestore().collection('users').doc(userId).set(data);

    const user = await firestore().collection('users').doc(userId).get();
    if (user && user._data) {
      dispatch(authenticate(user._data));
    } else {
      dispatch(setAlert('Something went wrong.', 'danger'));
    }
  } catch (error) {
    if (error) {
      console.log(error);
      dispatch(setAlert(error, 'danger'));
    }
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const userId = response.user.uid;
    const user = await firestore().collection('users').doc(userId).get();

    if (user && user._data) {
      dispatch(authenticate(user._data));
    } else {
      dispatch(setAlert('User does not exist. Please try again.', 'danger'));
    }
  } catch (error) {
    console.log('error', error);
    if (error) {
      dispatch(setAlert('Wrong Credentials', 'danger'));
    }
  }
};
