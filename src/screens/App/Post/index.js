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
  TouchableOpacity,
} from 'react-native';
import {IMAGE} from '../../../assets/images/images';

const Post = ({navigation}) => {
  const [list, setList] = useState([]);

  // const APP_ID = '60a2006068a4f057f0c70e0f';
  // const APP_ID = '60a353bb301f6600f7a467af';
  const APP_ID = '60a4b70100c81f3310527bd1';

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
          {/* <Text style={styles.tags}> {item.tags[0]}</Text>
          <Text style={styles.tags}> {item.tags[1]}</Text>
          <Text style={styles.tags}> {item.tags[2]}</Text> */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            {item.tags.map(value => {
              return <Text style={styles.tags}> {value}</Text>;
            })}
          </View>
          <Text style={styles.text}> {item.text}</Text>
          <Text style={styles.link}> {item.link}</Text>
          <View
            style={{borderBottomWidth: 1, margin: 10, width: '100%', right: 9}}
          />
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.likeButton} source={IMAGE.FILLHEART} />
            <Text style={styles.likeDigit}> {item.likes}</Text>
            <Text style={styles.like}> Likes</Text>
            <Text style={styles.publishDate}> {item.publishDate}</Text>
          </View>
          <View
            style={{borderBottomWidth: 1, margin: 10, width: '100%', right: 9}}
          />
          {/* {console.log('$$$$$$$$$$$$$$$4444', item.id)} */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Comments', {
                commentId: item.id,
              });
            }}>
            <Text style={styles.navComments}> GET POST COMMENTS </Text>
          </TouchableOpacity>
          {/* {console.log('!!!!!!!!!!!!!!!!!!', item.owner.id)} */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OwnerProfile', {ownerId: item.owner.id});
            }}>
            <Text style={styles.navComments}> GET OWNER PROFILE</Text>
          </TouchableOpacity>
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
    width: 312,
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
    height: 15,
    width: 15,
    top: 5,
  },
  dp: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  like: {fontSize: 16, left: 7, top: 1},
  like: {fontSize: 16, left: 7, top: 1},
  navComments: {
    fontSize: 16,
    left: 7,
    top: 3,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  textEmail: {fontSize: 13, top: 3, left: 3},
  link: {fontSize: 15, top: 7, color: 'black', left: 3, color: 'blue'},
  likeDigit: {fontSize: 16, top: 1, color: 'black', left: 3},
  publishDate: {
    fontSize: 15,
    top: 2.5,
    color: 'grey',
    left: 80,
  },
  textName: {fontSize: 20, fontWeight: 'bold', top: 10, left: 5},
  textID: {fontSize: 19, color: 'grey', top: 10},
  text: {fontSize: 21, color: 'black', top: 10},
  tags: {
    top: 5,
    fontSize: 15,
    color: 'black',
    borderRadius: 15,
    backgroundColor: 'pink',
    margin: 5,
    padding: 5,
  },
  email: {fontSize: 17, color: 'grey', left: 6},
  name: {fontSize: 23, color: 'black', left: 10},
});

export default Post;
