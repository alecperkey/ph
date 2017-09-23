import React, { Component } from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LoginStatusMessage from '../components/LoginStatusMessage';
import AuthButton from '../components/AuthButton';

class MainScreen extends Component {
  componentDidMount() {
    // this.props.facebookLogin();
    // this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    // if (props.token) {
    //   this.props.navigation.navigate('Profile');
    // }
  }

  render() {
    // debugger;
    return (
      <View>
        <Text>Main Screen</Text>
        <LoginStatusMessage />
        <AuthButton />
      </View>
    );
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

MainScreen.navigationOptions = {
  title: 'Main Screen',
};

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(MainScreen);
