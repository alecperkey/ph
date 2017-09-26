import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AuthButton from '../components/AuthButton';

class UserProfileScreen extends Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  attemptFacebookLogout = () => {
    this.props.facebookLogout();
  }

  render() {
    const {token, isLoggedIn} = { ...this.props };
    return (
      <View>
        <Text>User Profile Screen</Text>
        <Text>state.auth.isLoggedIn: {this.props.isLoggedIn}</Text>
        <Text>state.auth.token: {token}</Text>
        <AuthButton
          continueWithFacebook={this.attemptFacebookLogin}
          isLoggedIn={isLoggedIn}
          logout={this.attemptFacebookLogout}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  token: state.auth.token
});

export default connect(mapStateToProps, actions)(UserProfileScreen);
