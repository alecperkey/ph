import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

import {
  FACEBOOK_LOGOUT,
  FACEBOOK_LOGIN_SUCCESS
} from '../actions/types';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);
export default function nav(state = initialNavState, action) {
  let nextState;
  console.log(action.type);
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Profile':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Profile' }),
        state
      );
      break;
    case 'Main':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      );
      break;
    case FACEBOOK_LOGOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case FACEBOOK_LOGIN_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

