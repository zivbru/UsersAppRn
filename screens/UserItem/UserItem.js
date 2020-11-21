import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const UserItem = ({user, navigateEditPage}) => {
  return (
    <View style={styles.contianer}>
      <View style={styles.userItem}>
        <Text style={styles.mailText}>{user.email}</Text>
        <Text style={styles.text}>{user.fullName}</Text>
        <Text style={styles.text}>{user.phone}</Text>
        <View style={styles.editBtn}>
          <Button
            title="Edit"
            onPress={() => navigateEditPage(user.id)}></Button>
        </View>
        <View style={styles.deleteBtn}>
          <Button title="X" onPress={() => navigateEditPage(user.id)}></Button>
        </View>
      </View>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
  },
  userItem: {
    flexDirection: 'row',
    marginTop: 20,
  },
  mailText: {
    fontSize: 12,
    marginHorizontal: 15,
    width: 100,
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 12,
    marginHorizontal: 15,
    width: 60,
  },
  editBtn: {
    width: 50,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    left: 15,
  },
  deleteBtn: {
    width: 50,
    alignItems: 'center',
    height: 30,
    flexDirection: 'row',
    marginVertical: 5,
    left: 15,
  },
});
