import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

class AuthButton extends Component {

  render(){
    const {logout, isLoggedIn, continueWithFacebook} = { ...this.props };
    return (
      <Button
        title={isLoggedIn ? 'Log Out' : 'Continue with Facebook'}
        onPress={isLoggedIn ? logout : continueWithFacebook}
        raised
        buttonStyle={styles.buttonStyle}
      />
    );
  }
}

const styles = {
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
};

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
  continueWithFacebook: PropTypes.func
};

export default AuthButton;
