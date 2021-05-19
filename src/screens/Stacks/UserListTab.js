import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import UserList from '../App/UserList';
import FullProfile from '../Full Profile';
import PostList from '../Post Lists';

const Stack = createStackNavigator();

export const UserListTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList" headerMode={'none'}>
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="FullProfile" component={FullProfile} />
        <Stack.Screen name="PostList" component={PostList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
