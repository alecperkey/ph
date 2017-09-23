import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

class AuthButton extends Component {

  render(){
    const {logout, isLoggedIn, continueWithFacebook} = { ...this.props };
    debugger;
    return (
      <Button
        title={isLoggedIn ? 'Log Out' : 'Continue with Facebook'}
        onPress={isLoggedIn ? logout : continueWithFacebook}
      />
    );
  }
}

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
  continueWithFacebook: PropTypes.func
};

export default AuthButton;
