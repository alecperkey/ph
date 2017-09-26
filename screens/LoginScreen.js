import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';

import {facebookLogin} from '../actions';
import * as actions from '../actions';
import LoginStatusMessage from '../components/LoginStatusMessage';
import AuthButton from '../components/AuthButton';

class LoginScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.dispatch({ type: 'Profile' });
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  attemptFacebookLogin = () => {
    this.props.facebookLogin();
    // this.onAuthComplete(props);
  }

  attemptFacebookLogout = () => {
    this.props.facebookLogout();
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    // facebook auth successful, exit Login to Onboarding or Main
    if (props.token) {
      this.props.navigation.navigate('Profile');
    }
  }

  exampleManualNavigationButton = (navigation) =>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Dispatch navigation to Login"
    />;

  render() {
    debugger;
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    const navigation = this.props.navigation;
    const {logout, isLoggedIn} = { ...this.props };

    return (
      <View>
        <Text>Login Screen</Text>

        <LoginStatusMessage
          isLoggedIn={isLoggedIn}
          logout={this.attemptFacebookLogout}
        />

        <AuthButton
          continueWithFacebook={this.attemptFacebookLogin}
          isLoggedIn={isLoggedIn}
          logout={this.attemptFacebookLogout}
        />
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  title: 'Log In',
};

LoginScreen.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func,
  navigation: PropTypes.object,
  token: PropTypes.any
};

const mapStateToProps = state => ({
  auth: state.auth,
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  facebookLogin: facebookLogin
});

export default connect(mapStateToProps, actions)(LoginScreen);
