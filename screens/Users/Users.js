import {useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchAllUsers} from '../../store/actions/users';
import {logout} from '../../store/actions/auth';
import UserItem from '../UserItem/UserItem';
import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';

const Users = ({fetchAllUsers, users: {users}, navigation, logout}) => {
  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => (
        <View style={styles.logoutBtn}>
          <Button title="Logout" onPress={() => logout()}></Button>
        </View>
      ),
      headerLeft: () => (
        <View style={styles.addUserBtn}>
          <Button
            title="Add User"
            style={styles.addUserBtn}
            onPress={() =>
              navigation.navigate('CreateNewUser', {title: 'Create'})
            }></Button>
        </View>
      ),
    });
  }, [navigation]);

  const navigateEditOrCreatePage = (id) => {
    console.log('id', id);
    navigation.navigate('CreateNewUser', {title: 'Edit', id});
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.text}>Full Name</Text>
        <Text style={styles.text}>Phone</Text>
        <Text style={styles.text}>Actions</Text>
      </View>
      <View>
        <FlatList
          data={users}
          orienat
          keyExtractor={(item, index) => index.toString()}
          renderItem={(itemData) => (
            <UserItem
              user={itemData.item}
              navigateEditPage={navigateEditOrCreatePage}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flexDirection: 'row',
    // margin: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 19,
    marginHorizontal: 18,
  },

  logoutBtn: {
    color: '#0074D9',
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  addUserBtn: {
    marginHorizontal: 10,
    backgroundColor: '#7FDBFF',
    color: '#7FDBFF',
  },
});

Users.propTypes = {
  fetchAllUsers: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, {fetchAllUsers, logout})(Users);
