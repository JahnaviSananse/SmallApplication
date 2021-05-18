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
  StatusBar,
} from 'react-native';
import {IMAGE} from '../../../assets/images/images';

const UserList = () => {
  const [list, setList] = useState([]);

  const APP_ID = '60a2006068a4f057f0c70e0f';

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
          padding: '12%',
          margin: '10%',
          backgroundColor: 'pink',
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
    width: 220,
    height: 200,
  },
  textEmail: {fontSize: 13.5, top: 3, left: 3},
  textName: {fontSize: 20, fontWeight: 'bold', top: 10, left: 5},
  textID: {fontSize: 19, color: 'grey', top: 10},
});

export default UserList;
