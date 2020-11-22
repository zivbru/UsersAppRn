import {
  GET_ALL_USERS,
  USERS_ERROR,
  FETCH_USER_BY_ID,
  CREATE_NEW_USER,
  EDIT_USER,
  DELETE_USER,
} from '../types';

const initialState = {
  users: [],
  selectedUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.users,
      };
    case FETCH_USER_BY_ID:
      return {
        ...state,
        selectedUser: action.user,
      };
    case CREATE_NEW_USER:
      return {
        ...state,
        users: [...users, action.user],
      };
    case EDIT_USER:
      const newUsers = users.fiter((user) => user.id === action.user.id);
      return {
        ...state,
        users: [...newUsers, action.user],
      };
    case DELETE_USER:
      return {
        ...state,
        users: users.fiter((user) => user.id === action.user),
      };
    default:
      return state;
  }
};
