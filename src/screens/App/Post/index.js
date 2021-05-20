import React, {useState, useEffect} from 'react';
import {BASE_URL} from '../../../constants/api';
import {SafeAreaView, FlatList} from 'react-native';
import styles from './style';
import {API_CALL_GET} from '../../../api/request';
import PostListCard from '../../../components/PostListCard/index';

const Post = ({navigation}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let url = `${BASE_URL}/post`;
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
        publishDate={item.publishDate}
        id={item.id}
        owner_id={item.owner.id}
        route={navigation}
        PostComment={true}
        // PostCommentPress={() =>
        //   navigation.navigate('Comments', {
        //     commentId: item.id,
        //   })
        // }
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list?.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Post;
