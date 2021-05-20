import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {IMAGE} from '../../assets/images/images';
import {PostTab} from '../Stacks/index';
import {UserListTab} from '../Stacks/index';
import * as STRING from '../../constants/constant';
import THEME from '../../constants/colors';
import styles from './style';
const Tabbar = createMaterialBottomTabNavigator({
  UserListTab: {
    screen: UserListTab,
    navigationOptions: {
      tabBarLabel: STRING.USER_LIST,
      activeColor: THEME.RED,
      barStyle: {backgroundColor: THEME.WHITE},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.USERLIST} />,
    },
  },
  PostTab: {
    screen: PostTab,
    navigationOptions: {
      tabBarLabel: STRING.POST,
      activeColor: THEME.RED,
      barStyle: {backgroundColor: THEME.WHITE},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.POST} />,
    },
  },
});

export default createAppContainer(Tabbar);
