// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Alert, UIManager, AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist-immutable';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';

// ------------------------------------
// COMPONENTS
// ------------------------------------
// import AppWithNavigationState from './navigators/AppNavigator';
import AppNavigation from './navigations';
import Loading from './components/Loading';
// ------------------------------------
// UTILS
// ------------------------------------
import store from './store';
import {
  persistWhitelist,
  // subsetOfAppReducer,
} from './utils/constants';

type State = {
  isReady: boolean,
};

class App extends PureComponent<void, {}, State> {
  state = {
    isReady: false,
  };
  
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
    // debugger;
    firebase.initializeApp(config);

    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log('firebase is authenticated now!');

      }
      // Do other things
    });
  }
  
  componentDidMount() {
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: persistWhitelist,
        // transforms: [subsetOfAppReducer],
      },
      () => {
        this.setState({ isReady: true });
      },
    );
  }

  render() {
    debugger;
    console.log(<Loading />);
    if (true) {
      return <View />;
    }
    return <View />;
    // return (
    //   <Provider store={store}>
    //     <AppNavigation />
    //   </Provider>
    // );
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

export default App;