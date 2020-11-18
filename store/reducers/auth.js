import {AUTHENTICATE} from '../types';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
