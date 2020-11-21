import {GET_ALL_USERS, USERS_ERROR, FETCH_USER_BY_ID} from '../types';

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
    default:
      return state;
  }
};
