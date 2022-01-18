import React from 'react';
import Home from './src/screens/Home';
import PrivateVault from './src/screens/PrivateVault';
import PublicVault from './src/screens/PublicVault';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PublicVault" component={PublicVault} />
          <Stack.Screen name="PrivateVault" component={PrivateVault} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;