import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchUserById} from '../../store/actions/users';
import PropTypes from 'prop-types';
import {AppStyles} from '../../components/UI/AppStyles';
import Button from 'react-native-button';
import {useSelector, useDispatch} from 'react-redux';

const CreateNewUser = ({route, fetchUserById}) => {
  const selectedUser = useSelector((state) =>
    state.users.users.find((user) => user.id === route.params.id),
  );
  const title = route.params.title;

  const [fullName, setFullname] = useState(
    selectedUser ? selectedUser.fullName : '',
  );

  const [phone, setPhone] = useState(selectedUser ? selectedUser.phone : '');
  const [email, setEmail] = useState(selectedUser ? selectedUser.email : '');
  const [password, setPassword] = useState(
    selectedUser ? selectedUser.password : '',
  );

  const onSave = () => {
    if (title === 'Create') {
    } else {
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>{title} User</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Full Name"
          onChangeText={(text) => setFullname(text)}
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
        onPress={() => onSave()}>
        Save
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

CreateNewUser.propTypes = {
  fetchUserById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // selectedUser: state.users.selectedUser,
});

export default connect(null, {fetchUserById})(CreateNewUser);
