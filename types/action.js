// @flow

// import type { HoldingData } from './data';

// ------------------------------------
// User Actions
// ------------------------------------
type LoginAction = {
  type: 'LOGIN',
};

// ------------------------------------
// Auth Actions
// ------------------------------------
type FacebookLoginSuccess = {
  type: 'auth/FACEBOOK_LOGIN_SUCCESS',
};
type FacebookLoginFail = {
  type: 'auth/FACEBOOK_LOGIN_FAIL',
};
type FacebookLogout = {
  type: 'auth/FACEBOOK_LOGOUT',
};

// ------------------------------------
// App Actions
// ------------------------------------
type ToggleThemeAction = {
  type: 'app/TOGGLE_THEME',
};

type ToggleSearchBarAction = {
  type: 'app/TOGGLE_SEARCH_BAR',
};

// ------------------------------------
// Cryptos Actions
// ------------------------------------
// type AddNewHoldingAction = {
//   type: 'cryptos/ADD_NEW_HOLDING',
//   coin: HoldingData,
// };

export type Action =
  | LoginAction
  | ToggleThemeAction
  | ToggleSearchBarAction
  | FacebookLoginSuccess
  | FacebookLoginFail
  | FacebookLogout;
  // | AddNewHoldingAction;
