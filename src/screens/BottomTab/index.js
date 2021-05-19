import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Post from '../App/Post';
import UserList from '../App/UserList';
import {IMAGE} from '../../assets/images/images';
import {PostTab} from '../Stacks/index';
import {UserListTab} from '../Stacks/index';
const Tabbar = createMaterialBottomTabNavigator({
  UserListTab: {
    screen: UserListTab,
    navigationOptions: {
      tabBarLabel: 'UserList',
      activeColor: 'red',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.USERLIST} />,
    },
  },
  PostTab: {
    screen: PostTab,
    navigationOptions: {
      tabBarLabel: 'Post',
      activeColor: 'red',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.POST} />,
    },
  },
});

export default createAppContainer(Tabbar);

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    // bottom: 20,
    // top: 10,
    //alignSelf: 'center',
    //marginRight: 30,
    //marginLeft: 10,
  },
});
