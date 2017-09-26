import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/UserProfileScreen';

const RouteConfigs = {
  Login: { screen: LoginScreen, title: 'Login Screen' },
  Main: { screen: MainScreen, title: 'Main Screen'  },
  Profile: { screen: ProfileScreen, title: 'Profile Screen'  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Login',
  headerMode: 'screen',
};

export const AppNavigator = StackNavigator(RouteConfigs, StackNavigatorConfig);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
