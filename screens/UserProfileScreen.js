import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserProfileScreen extends Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    debugger;
    return (
      <View>
        <Text>User Profile Screen</Text>
        <Text>state.auth.isLoggedIn: {this.props.isLoggedIn}</Text>
        <Text>state.auth.token: {this.props.token}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  token: state.auth.token
});

export default connect(mapStateToProps, actions)(UserProfileScreen);
