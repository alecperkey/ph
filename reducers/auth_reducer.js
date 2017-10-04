import { Record, Map } from 'immutable';

import type { AuthState, Action } from '../types';

// initial state
const AuthRecord = Record({
  token: null,
  isLoggedIn: false
});



export default function authReducer(
  state: AuthState = new AuthRecord(), 
  action: Action,
): AuthState {
  switch (action.type) {
    case 'auth/FACEBOOK_LOGIN_SUCCESS':
      return {
        token: action.payload,
        isLoggedIn: true,
      };
    case 'auth/FACEBOOK_LOGIN_FAIL':
      return {
        token: null,
        isLoggedIn: false,
      };
    case 'auth/FACEBOOK_LOGOUT':
      return {
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
