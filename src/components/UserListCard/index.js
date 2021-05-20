import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import * as STRING from '../../constants/constant';

const UserListCard = props => {
  const {picture, id, name, email, FullProfilePress, PostListPress} = props;
  return (
    <View style={styles.mainView}>
      <Image style={styles.stretch} source={{uri: picture}} />
      <Text style={styles.textID}> {id}</Text>
      <Text style={styles.textName}>{name}</Text>
      <Text style={styles.textEmail}> {email}</Text>
      <View style={styles.border} />
      <TouchableOpacity onPress={() => FullProfilePress()}>
        <Text style={styles.navComments}> {STRING.GET_FULL_PROFILE} </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => PostListPress()}>
        <Text style={styles.navComments}> {STRING.GET_POST_LISTS} </Text>
      </TouchableOpacity>
    </View>
  );
};
export default UserListCard;
