import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  FACEBOOK_LOGOUT
} from '../actions/types';

const initialState = {
  token: null,
  isLoggedIn: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return {
        token: action.payload,
        isLoggedIn: true,
      };
    case FACEBOOK_LOGIN_FAIL:
      return {
        token: null,
        isLoggedIn: false,
      };
    case FACEBOOK_LOGOUT:
      return {
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
