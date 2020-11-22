import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import auth from './reducers/auth';
import users from './reducers/users';

const rootReducer = combineReducers({
  auth,
  users,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
