import React, {useState, useEffect} from 'react';
import {BASE_URL} from '../../constants/api';
import {SafeAreaView, FlatList} from 'react-native';
import styles from './style';
import CommentCard from '../../components/CommentCard/index';
import {API_CALL_GET} from '../../api/request';

const Comments = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let url = `${BASE_URL}/post/${props.route.params?.commentId}/comment?limit=10`;
    API_CALL_GET(url).then(data => setList(data));
  }, []);

  const renderItem = ({item}) => {
    return (
      <CommentCard
        picture={item.owner.picture}
        name={item.owner.firstName + ' ' + item.owner.lastName}
        publishDate={item.publishDate}
        message={item.message}
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

export default Comments;
