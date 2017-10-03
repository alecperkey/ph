import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LoginStatusMessage from '../components/LoginStatusMessage';

class MainScreen extends Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const {isLoggedIn} = { ...this.props };

    return (
      <View>
        <Text>Main Screen</Text>
        <LoginStatusMessage
          isLoggedIn={isLoggedIn}
          logout={this.attemptFacebookLogout}
        />
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

const mapStateToProps = state => ({
  token: state.get('auth').token,
  isLoggedIn: state.get('auth').isLoggedIn
});
export default connect(mapStateToProps, actions)(MainScreen);
