import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import * as firebase from 'firebase';

// import {
//   FACEBOOK_LOGIN_SUCCESS,
//   FACEBOOK_LOGIN_FAIL,
//   FACEBOOK_LOGOUT
// } from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const facebookLogout = () => async dispatch => {
  let token = await AsyncStorage.removeItem('fb_token');

  if (token) {
    console.log('ERR: token not removed', token);
  } else {
    // Dispatch an action to clear token from redux state also
    dispatch({ type: 'auth/FACEBOOK_LOGOUT', payload: null});
  }
};

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({ type: 'auth/FACEBOOK_LOGIN_SUCCESS', payload: token });
  } else {
    // Start up FB Login process
    doFacebookLoginWithFirebase(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('140978153159621', {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({ type: 'auth/FACEBOOK_LOGIN_FAIL' });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: 'auth/FACEBOOK_LOGIN_SUCCESS', payload: token });
};

const doFacebookLoginWithFirebase = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('140978153159621', {
    permissions: ['public_profile']
  });

  console.log({type,token});

  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    console.log('doFacebookLoginWithFirebase type success');
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    firebase.auth().signInWithCredential(credential).catch((error) => {
      // Handle Errors here.
    });
  }
  if (type === 'cancel') {
    console.log('doFacebookLoginWithFirebase type cancel');
    return dispatch({ type: 'auth/FACEBOOK_LOGIN_FAIL' });
  }

  await AsyncStorage.setItem('fb_token', token);
  console.log('dispatch auth/FACEBOOK_LOGIN_SUCCESS, token: ', token);
  dispatch({ type: 'auth/FACEBOOK_LOGIN_SUCCESS', payload: token });
};
