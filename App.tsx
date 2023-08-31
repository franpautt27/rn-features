// In App.js in a new project

import * as React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from './src/navigators/Navigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';



const Stack = createNativeStackNavigator();

function App() {


  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;