import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { StackNavigator } from "react-navigation";
import MainScreen from './screens/MainScreen'

export default class App extends React.Component {
  render() {
    const MainNavigator=StackNavigator({
      Main:{screen:MainScreen}
    })
    return (
      <Provider store={store}>
        <MainNavigator/>
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
