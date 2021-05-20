import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import UserList from '../App/UserList';
import FullProfile from '../Full Profile';
import PostList from '../Post Lists';
import * as STRING from '../../constants/constant';

const Stack = createStackNavigator();

export const UserListTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={STRING.USER_LIST} headerMode={'none'}>
        <Stack.Screen name={STRING.USER_LIST} component={UserList} />
        <Stack.Screen name={STRING.FULL_PROFILE} component={FullProfile} />
        <Stack.Screen name={STRING.POST_LIST} component={PostList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
