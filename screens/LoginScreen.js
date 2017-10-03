import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';

// import {facebookLogin} from '../actions';
import * as actions from '../actions';
import LoginStatusMessage from '../components/LoginStatusMessage';
import AuthButton from '../components/AuthButton';

class LoginScreen extends Component {
  // state = { token: null };

  async componentWillMount() {
    console.log('will mount');
    // let token = await AsyncStorage.getItem('fb_token');
    let token = this.props.token || false;

    if (token) {
      // this.props.navigation.dispatch({ type: 'Main' });
      // this.setState({ token });
    } else {
      // this.setState({ token: false });
    }
  }

  attemptFacebookLogin = () => {
    this.props.facebookLogin();
  };

  attemptFacebookLogout = () => {
    this.props.facebookLogout();
  };

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    // facebook auth successful, exit Login to Onboarding or Main
    console.log('onAuthComplete', !!props.token);
    if (props.token) {
      // this.props.navigation.dispatch({type: 'Main'});
    }
  }

  // exampleManualNavigationButton = (navigation) =>
  //   <Button
  //     onPress={() => navigation.dispatch({ type: 'Login' })}
  //     title="Dispatch navigation to Login"
  //   />;

  render() {
    // token not available till rehydration
    // TBD show AppLoading while rehydrating -- how to know?
    // if (_.isNull(this.props.token) && false) {
    //   return <AppLoading />;
    // }

    // const navigation = this.props.navigation;
    const {isLoggedIn} = { ...this.props };

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
  auth: state.get('auth'),
  token: state.get('auth').token,
  isLoggedIn: state.get('auth').isLoggedIn
});

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch({ type: 'Logout' }),
// });

export default connect(mapStateToProps, actions)(LoginScreen);
