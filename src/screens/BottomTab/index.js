import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Post from '../App/Post';
import UserList from '../App/UserList';
import {IMAGE} from '../../assets/images/images';
const Tabbar = createMaterialBottomTabNavigator({
  Post: {
    screen: Post,
    navigationOptions: {
      tabBarLabel: 'Post',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.POST} />,
    },
  },

  UserList: {
    screen: UserList,
    navigationOptions: {
      tabBarLabel: 'UserList',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.USERLIST} />,
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
