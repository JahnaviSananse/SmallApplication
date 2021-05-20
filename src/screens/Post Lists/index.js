import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../constants/api';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {IMAGE} from '../../assets/images/images';
import {APP_ID} from '../../constants/api';
import {getDateMonth} from '../../utility/util';
import styles from './style';
import * as STRING from '../../constants/constant';

const PostList = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/${props.route.params?.postList}/post`, {
        headers: {'app-id': APP_ID},
      })
      .then(({data}) => setList(data))
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.mainView}>
          <View style={styles.border}>
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
            <Text style={styles.publishDate}>
              {getDateMonth(item.publishDate)}
            </Text>
          </View>
          <View style={styles.border} />
          <TouchableOpacity>
            <Text style={styles.navComments}> {STRING.GET_POST_COMMENTS} </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navComments}> {STRING.GET_OWNER_PROFILE}</Text>
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

export default PostList;
