// @flow

import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import UserProfileScreen from './screens/UserProfileScreen';

export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDIP0UGGNRqFP946TWk3CcfWtwKO7Yyn_s",
      authDomain: "positive-head.firebaseapp.com",
      databaseURL: "https://positive-head.firebaseio.com",
      projectId: "positive-head",
      storageBucket: "positive-head.appspot.com",
      messagingSenderId: "770866405055"
    };
    debugger;
    firebase.initializeApp(config);

    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log('firebase is authenticated now!');

      }
      // Do other things
    });

  }

  render() {

    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          "user-profile": { screen: UserProfileScreen },
        }, {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        })
      }
    }, {
      navigationOptions: {
        // tabBar: { visible: false }
      },
      lazyLoad: true
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
