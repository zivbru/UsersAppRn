import {
  GET_ALL_USERS,
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
        users: [...state.users, action.user],
      };
    case EDIT_USER:
      state.users = state.users.filter((user) => user.id !== action.id);
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.user),
      };
    default:
      return state;
  }
};
