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
import styles from './style';
import {APP_ID} from '../../../constants/api';
const Post = ({navigation}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/post`, {headers: {'app-id': APP_ID}})
      .then(({data}) => setList(data))
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.mainView}>
          <View style={styles.row}>
            <Image style={styles.dp} source={{uri: item.owner.picture}} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.name}>
                {item.owner.firstName + ' ' + item.owner.lastName}
              </Text>
              <Text style={styles.email}> {item.owner.email}</Text>
            </View>
          </View>
          <View style={styles.border} />
          <Image style={styles.stretch} source={{uri: item.image}} />
          {/* <Text style={styles.tags}> {item.tags[0]}</Text>
          <Text style={styles.tags}> {item.tags[1]}</Text>
          <Text style={styles.tags}> {item.tags[2]}</Text> */}
          <View style={styles.row}>
            {item.tags.map(value => {
              return <Text style={styles.tags}> {value}</Text>;
            })}
          </View>
          <Text style={styles.text}> {item.text}</Text>
          <Text style={styles.link}> {item.link}</Text>
          <View style={styles.border} />
          <View style={styles.row}>
            <Image style={styles.likeButton} source={IMAGE.FILLHEART} />
            <Text style={styles.likeDigit}> {item.likes}</Text>
            <Text style={styles.like}> Likes</Text>
            <Text style={styles.publishDate}> {item.publishDate}</Text>
          </View>
          <View style={styles.border} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Comments', {
                commentId: item.id,
              });
            }}>
            <Text style={styles.navComments}> GET POST COMMENTS </Text>
          </TouchableOpacity>
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Post;
