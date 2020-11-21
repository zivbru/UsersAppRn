import {AUTHENTICATE, LOGOUT} from '../types';

const initialState = {
  user: null,
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        user: JSON.stringify(action.user),
        isLoggedIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
