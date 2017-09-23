import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';

import {facebookLogin} from '../actions';
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
    debugger;
    this.props.facebookLogin();
    // this.onAuthComplete(props);
  };

  componentWillReceiveProps(nextProps) {
    debugger;
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    // facebook auth successful, exit Login to Onboarding or Main
    if (props.token) {
      this.props.navigation.navigate('Profile');
    }
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    const navigation = this.props.navigation;
    const {logout, isLoggedIn} = { ...this.props };

    debugger;

    return (
      <View>
        <Text>Login Screen</Text>
        <Button
          onPress={() => navigation.dispatch({ type: 'Login' })}
          title="Dispatch navigation to Login"
        />

        <LoginStatusMessage />
        <AuthButton
          continueWithFacebook={this.attemptFacebookLogin}
          isLoggedIn={isLoggedIn}
          logout={logout}
        />
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  title: 'Log In',
};

LoginScreen.propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
  navigation: PropTypes.object,
  token: PropTypes.any
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  facebookLogin
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
