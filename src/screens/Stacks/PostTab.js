import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Post from '../App/Post';
import Comments from '../Comments';
import OwnerProfile from '../Owner Profile';
import * as STRING from '../../constants/constant';

const Stack = createStackNavigator();

export const PostTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={STRING.POST} headerMode={'none'}>
        <Stack.Screen name={STRING.POST} component={Post} />
        <Stack.Screen name={STRING.COMMENTS} component={Comments} />
        <Stack.Screen name={STRING.OWNER_PROFILE} component={OwnerProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
