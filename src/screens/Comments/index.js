import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../constants/api';
import {View, Text, Image, SafeAreaView, FlatList} from 'react-native';
import {APP_ID} from '../../constants/api';
import {getDateMonth} from '../../utility/util';
import styles from './style';

const Comments = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/post/${props.route.params?.commentId}/comment?limit=10`,
        {
          headers: {'app-id': APP_ID},
        },
      )
      .then(({data}) => setList(data))
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.mainView}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.stretch} source={{uri: item.owner.picture}} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.textName}>
              {item.owner.firstName + ' ' + item.owner.lastName}
            </Text>
            <Text style={styles.publishDate}>
              {getDateMonth(item.publishDate)}
            </Text>
          </View>
        </View>
        <View style={styles.border} />
        <Text style={styles.message}> {item.message}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={list.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Comments;
