import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import {Provider} from 'react-redux';
import store from './store/store';
import Welcome from './screens/Welocome/Welcome';

const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <Welcome /> */}
        <Login />
        {/* <SignUp /> */}
      </Provider>
    </>
  );
};

export default App;
