import {GET_ALL_USERS, USERS_ERROR, FETCH_USER_BY_ID} from '../types';
import api from '../../utils/api';

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const users = await api.get('/users');
    dispatch({
      type: GET_ALL_USERS,
      users: users.data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
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
    dispatch({
      type: USERS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
