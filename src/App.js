
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux'; //wropper to use redux with react
import ReduxThunk from 'redux-thunk'; //for async dispach operations
import { createStore, applyMiddleware } from 'redux'; //for using redux

import duck from './duck';


import HomeContainer from './containers/HomeContainer';

const store = createStore(duck, applyMiddleware(ReduxThunk));

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    console.disableYellowBox = true;
    if (Platform.OS !== 'ios') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
