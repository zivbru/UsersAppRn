import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Alert,
  Button,
} from 'react-native';
import {login} from '../../store/actions/auth';
import PropTypes from 'prop-types';

const Login = ({login}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = async () => {
    if (email.length <= 0 || password.length <= 0) {
      alert('Please fill out the required fields.');
      return;
    }
    await login(email, password);
    //redirect to main screen
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Users App</Text>
          <TextInput
            placeholder="Email"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            placeholderColor="#c4c3cb"
            autoCompleteType="password"
            style={styles.loginFormTextInput}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.loginButton}>
            <Button onPress={() => onLoginPress()} title="Login" />
          </View>
          <View style={styles.fbLoginButton}>
            <Button title="Login with Facebook" color="#0074D9" />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 90,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginVertical: 5,
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 35,
    marginTop: 10,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, {login})(Login);
