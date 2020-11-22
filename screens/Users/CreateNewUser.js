import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {fetchUserById} from '../../store/actions/users';
import PropTypes from 'prop-types';
import {AppStyles} from '../../components/UI/AppStyles';
import Button from 'react-native-button';
import {useSelector} from 'react-redux';
import {createNewUser, editUser} from '../../store/actions/users';

const CreateNewUser = ({route, navigation, createNewUser, editUser}) => {
  const title = route.params.title;
  const selectedUser = useSelector((state) =>
    state.users.users.find((user) => user.id === route.params.id),
  );
  const [fullName, setFullname] = useState(
    selectedUser ? selectedUser.fullName : '',
  );
  const [phone, setPhone] = useState(selectedUser ? selectedUser.phone : '');
  const [email, setEmail] = useState(selectedUser ? selectedUser.email : '');
  const [password, setPassword] = useState(
    selectedUser ? selectedUser.password : '',
  );
  const [isLoading, setIsLoading] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title + ' User',
    });
  }, [navigation]);

  const onSave = async () => {
    setIsLoading(true);
    if (title === 'Create') {
      await createNewUser(fullName, email, password, phone);
    } else {
      console.log(title);
      await editUser(route.params.id, fullName, email, password, phone);
    }
    setIsLoading(false);
    navigation.goBack();
  };

  if (isLoading) {
    return (
      <View style={[styles.activityContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
        containerStyle={[styles.saveContainer, {marginTop: 50}]}
        style={styles.saveText}
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
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 50,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
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
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: 'red',
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 20,
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
  saveContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.blue,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  saveText: {
    color: AppStyles.color.white,
  },
});

CreateNewUser.propTypes = {
  fetchUserById: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  createNewUser: PropTypes.func.isRequired,
};

export default connect(null, {fetchUserById, createNewUser, editUser})(
  CreateNewUser,
);
