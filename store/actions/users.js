import {
  GET_ALL_USERS,
  FETCH_USER_BY_ID,
  CREATE_NEW_USER,
  EDIT_USER,
  DELETE_USER,
} from '../types';
import api from '../../utils/api';

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const users = await api.get('/users');
    dispatch({
      type: GET_ALL_USERS,
      users: users.data,
    });
  } catch (error) {
    alert(error.response.statusText, error.response.status);
  }
};

export const fetchUserById = (id) => async (dispatch) => {
  try {
    const user = await api.get(`/users/${id}`);
    dispatch({
      type: FETCH_USER_BY_ID,
      user: user.data,
    });
  } catch (error) {
    alert(error.response.statusText, error.response.status);
  }
};

export const createNewUser = (fullName, email, password, phone) => async (
  dispatch,
) => {
  console.log('createNewUser');
  try {
    const user = await api.post(`/users`, {fullName, email, password, phone});
    dispatch({
      type: CREATE_NEW_USER,
      user: user.data,
    });
  } catch (error) {
    alert(error.response.statusText, error.response.status);
  }
};

export const editUser = (id, fullName, email, password, phone) => async (
  dispatch,
) => {
  try {
    const user = await api.post(`/users/${id}`, {
      fullName,
      email,
      password,
      phone,
    });

    dispatch({
      type: EDIT_USER,
      user: user.data,
      id,
    });
  } catch (error) {
    console.log(error);
    alert(error.response.statusText, error.response.status);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.delete(`/users/${id}`);

    dispatch({
      type: DELETE_USER,
      user: id,
    });
  } catch (error) {
    alert(error.response.statusText, error.response.status);
  }
};
