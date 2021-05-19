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
import {IMAGE} from '../../../assets/images/images';

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
      <View
        style={{
          width: '80%',
          padding: '4.5%',
          margin: '5%',
          backgroundColor: '#dae1e7',
          // position: 'relative',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Image style={styles.stretch} source={{uri: item.picture}} />
        <Text style={styles.textID}> {item.id}</Text>
        <Text style={styles.textName}>
          {item.title + '. ' + item.firstName + item.lastName}
        </Text>
        <Text style={styles.textEmail}> {item.email}</Text>
        <View
          style={{borderBottomWidth: 1, margin: 12, width: '100%', right: 9}}
        />
        <TouchableOpacity onPress={() => navigation.navigate('FullProfile')}>
          <Text style={styles.navComments}> GET FULL PROFILE </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PostList')}>
          <Text style={styles.navComments}> GET POST LISTS</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* {console.log('List++++++++++++++++++++++', list)} */}
      <FlatList data={list.data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stretch: {
    width: 290,
    height: 220,
  },
  navComments: {
    fontSize: 16,
    left: 7,
    top: 3,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  textEmail: {fontSize: 13.5, top: 3, left: 3},
  textName: {fontSize: 20, fontWeight: 'bold', top: 10, left: 5},
  textID: {fontSize: 18, color: 'grey', top: 10},
});

export default UserList;
