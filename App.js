import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from './screens/MainScreen'


const RootStack = createStackNavigator(
  {
    Home: MainScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer=createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}