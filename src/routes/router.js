import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/auth/splash/splash';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';
import Home from '../screens/App/Home/index';
import Post from '../screens/App/Post/index';
import Choice from '../screens/App/choice/index';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Choice" component={Choice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
