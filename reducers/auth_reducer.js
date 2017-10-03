import { Record, Map } from 'immutable';

import type { AuthState, Action } from '../types';

// import {
//   FACEBOOK_LOGIN_SUCCESS,
//   FACEBOOK_LOGIN_FAIL,
//   FACEBOOK_LOGOUT
// } from '../actions/types';

const AuthRecord = Record({
  token: null,
  isLoggedIn: false
});

// const initialState = {
//   token: "null",
//   isLoggedIn: "null"
// };

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
