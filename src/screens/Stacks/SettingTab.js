import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Post from '../App/Post';
import Comments from '../Comments';
import OwnerProfile from '../Owner Profile';

const Stack = createStackNavigator();

export const SettingTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Post" headerMode={'none'}>
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Comments" component={Comments} />
        <Stack.Screen name="OwnerProfile" component={OwnerProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
