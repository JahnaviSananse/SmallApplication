import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../constants/api';
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

const OwnerProfile = () => {
  const [list, setList] = useState([]);

  // const APP_ID = '60a2006068a4f057f0c70e0f';
  const APP_ID = '60a353bb301f6600f7a467af';

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/uQrnqsqyh8FjSXAPc7oA`, {
        headers: {'app-id': APP_ID},
      })
      .then(({data}) => setList(data))
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    console.log('itemssss*************dgesg', item);
    return (
      <View
        style={{
          width: '96%',
          padding: '3%',
          margin: '5%',
          backgroundColor: 'pink',
          // position: 'relative',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.stretch} source={{uri: item.picture}} />
          <View style={{flexDirection: 'column'}}>
            {/* <Text style={styles.textName}>
              {item.owner.firstName + ' ' + item.owner.lastName}
            </Text> */}
            <Text style={styles.publishDate}> {item.publishDate}</Text>
          </View>
        </View>
        <View
          style={{borderBottomWidth: 1.5, margin: 10, width: '100%', right: 9}}
        />
        <Text style={styles.message}> {item.message}</Text>
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
    width: 65,
    height: 65,
    borderRadius: 40,
  },
  publishDate: {fontSize: 17, top: 5, left: 3, color: 'grey'},
  message: {fontSize: 21, top: 5, left: 3, color: 'black'},
  textName: {fontSize: 23, fontWeight: 'bold', top: 5, left: 10},
});

export default OwnerProfile;
