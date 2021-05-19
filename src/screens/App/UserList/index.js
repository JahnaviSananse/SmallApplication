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

const UserList = ({navigation}) => {
  const [list, setList] = useState([]);

  // const APP_ID = '60a2006068a4f057f0c70e0f';
  // const APP_ID = '60a353bb301f6600f7a467af';
  const APP_ID = '60a4b70100c81f3310527bd1';

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user`, {headers: {'app-id': APP_ID}})
      .then(({data}) => setList(data))
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    // console.log('itemssss*************', item);
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
          <Text style={styles.navComments}> GET FULL PROFILE </Text>
        </TouchableOpacity>
        {console.log('****************************', item.id)}
        <TouchableOpacity
          onPress={() => navigation.navigate('PostList', {postList: item.id})}>
          <Text style={styles.navComments}> GET POST LISTS</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* {console.log('List++++++++++++++++++++++', list)} */}
      <FlatList
        data={list.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default UserList;
