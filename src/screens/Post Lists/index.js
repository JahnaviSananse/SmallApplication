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
import {API_CALL_GET} from '../../api/request';
import PostListCard from '../../components/PostListCard';

const PostList = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let url = `${BASE_URL}/user/${props.route.params?.postList}/post`;
    API_CALL_GET(url).then(data => setList(data));
  }, []);

  const renderItem = ({item}) => {
    return (
      <PostListCard
        picture={item.owner.picture}
        name={item.owner.firstName + ' ' + item.owner.lastName}
        email={item.owner.email}
        image={item.image}
        tags={item.tags}
        text={item.text}
        link={item.link}
        likes={item.likes}
        publishDate={getDateMonth(item.publishDate)}
      />
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
