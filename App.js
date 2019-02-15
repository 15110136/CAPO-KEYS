import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { StackNavigator  } from "react-navigation";
import MainScreen from './screens/MainScreen'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const MainNavigator = StackNavigator ({
      Main: { screen: MainScreen }
    })
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}