import React from 'react';
import {StyleSheet, Alert} from 'react-native';

const AlertModal = ({msg, title}) => {
  return Alert.alert(
    title,
    msg,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    // {cancelable: false},
  );
};

export default AlertModal;

const styles = StyleSheet.create({});
