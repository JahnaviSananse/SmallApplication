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

const Post = () => {
  const [list, setList] = useState([]);

  const APP_ID = '60a2006068a4f057f0c70e0f';

  useEffect(() => {
    axios
      .get(`${BASE_URL}/post`, {headers: {'app-id': APP_ID}})
      .then(({data}) => setList(data))
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    // console.log('itemssss*************', item);
    return (
      <>
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.dp} source={{uri: item.owner.picture}} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.name}>
                {item.owner.firstName + ' ' + item.owner.lastName}
              </Text>
              <Text style={styles.email}> {item.owner.email}</Text>
            </View>
          </View>
          <View
            style={{borderBottomWidth: 1, margin: 10, width: '100%', right: 9}}
          />
          <Image style={styles.stretch} source={{uri: item.image}} />
          {/* <Text style={styles.tags}> {item.tags}</Text> */}
          <Text style={styles.text}> {item.text}</Text>
          <Text style={styles.link}> {item.link}</Text>
          <View
            style={{borderBottomWidth: 1, margin: 10, width: '100%', right: 9}}
          />
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.likeButton} source={IMAGE.HEART} />
            <Text style={styles.likeDigit}> {item.likes}</Text>
            <Text style={styles.like}> Likes</Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {console.log('List++++++++++++++++++++++', list)}
      <FlatList data={list.data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stretch: {
    width: 360,
    height: 400,
  },
  mainView: {
    width: '95%',
    padding: '4%',
    margin: '5%',
    backgroundColor: 'yellow',
    // position: 'relative',
    alignSelf: 'center',
    borderRadius: 10,
  },
  likeButton: {
    height: 20,
    width: 20,
  },
  dp: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  like: {fontSize: 20, left: 10},
  textEmail: {fontSize: 13, top: 3, left: 3},
  link: {fontSize: 15, top: 3, color: 'black', left: 3},
  likeDigit: {fontSize: 19, top: 1, color: 'black', left: 3},
  textName: {fontSize: 20, fontWeight: 'bold', top: 10, left: 5},
  textID: {fontSize: 19, color: 'grey', top: 10},
  text: {fontSize: 21, color: 'black', top: 10},
  tags: {
    fontSize: 19,
    color: 'black',
    backgroundColor: 'pink',
    borderRadius: 10,
  },
  email: {fontSize: 17, color: 'grey', left: 6},
  name: {fontSize: 23, color: 'black', left: 10},
});

export default Post;
