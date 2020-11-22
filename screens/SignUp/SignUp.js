import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {AppStyles} from '../../components/UI/AppStyles';
import Button from 'react-native-button';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../store/actions/auth';

const SignUp = ({register}) => {
  const [fullName, setFullname] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onRegister = async () => {
    await register(fullName, phone, email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Full Name"
          onChangeText={setFullname}
          value={fullName}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Phone Number"
          onChangeText={setPhone}
          keyboardType="phone-pad"
          value={phone}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="E-mail Address"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Password"
          secureTextEntry={true}
          minLength={5}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <Button
        containerStyle={[styles.facebookContainer, {marginTop: 50}]}
        style={styles.facebookText}
        onPress={() => onRegister()}>
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
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
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: 'red',
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
});

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(null, {register})(SignUp);
