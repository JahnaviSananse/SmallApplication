import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../../constants/api';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {APP_ID} from '../../../constants/api';
import * as STRING from '../../../constants/constant';

const UserList = ({navigation}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user`, {headers: {'app-id': APP_ID}})
      .then(({data}) => setList(data))
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.mainView}>
        <Image style={styles.stretch} source={{uri: item.picture}} />
        <Text style={styles.textID}> {item.id}</Text>
        <Text style={styles.textName}>
          {item.title + '. ' + item.firstName + ' ' + item.lastName}
        </Text>
        <Text style={styles.textEmail}> {item.email}</Text>
        <View style={styles.border} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('FullProfile', {fullProfile: item.id})
          }>
          <Text style={styles.navComments}> {STRING.GET_FULL_PROFILE} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PostList', {postList: item.id})}>
          <Text style={styles.navComments}> {STRING.GET_POST_LISTS} </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={list.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default UserList;
