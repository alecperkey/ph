// @flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDIP0UGGNRqFP946TWk3CcfWtwKO7Yyn_s",
      authDomain: "positive-head.firebaseapp.com",
      databaseURL: "https://positive-head.firebaseio.com",
      projectId: "positive-head",
      storageBucket: "positive-head.appspot.com",
      messagingSenderId: "770866405055"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
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
