import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';

class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('user-profile');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onFinishWelcome = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <View>
        <Text>Welcome Screen</Text>
        <Text onClick={this.onFinishWelcome}> Login </Text>
      </View>
    );
  }
}

export default WelcomeScreen;
