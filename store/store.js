import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import auth from './reducers/auth';
import alert from './reducers/alert';
import users from './reducers/users';

const rootReducer = combineReducers({
  auth,
  alert,
  users,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
