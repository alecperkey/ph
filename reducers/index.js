import { combineReducers } from 'redux-immutable';
import auth from './auth_reducer';
import nav from './nav_reducer';
import app from './app_reducer';

export default combineReducers({
  app,
  auth,
  nav
});
