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
import {APP_ID} from '../../constants/api';
import {getDateMonth} from '../../utility/util';

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
      <View
        style={{
          width: '96%',
          padding: '3%',
          margin: '5%',
          backgroundColor: '#dae1e7',
          // position: 'relative',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        {list ? (
          <>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.stretch}
                source={{uri: item.owner.picture}}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textName}>
                  {item.owner.firstName + ' ' + item.owner.lastName}
                </Text>
                <Text style={styles.publishDate}>
                  {getDateMonth(item.publishDate)}
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1.5,
                margin: 10,
                width: '100%',
                right: 9,
              }}
            />
            <Text style={styles.message}> {item.message}</Text>
          </>
        ) : (
          <Text> No Comment Posted</Text>
        )}
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

const styles = StyleSheet.create({
  stretch: {
    width: 65,
    height: 65,
    borderRadius: 40,
  },
  publishDate: {fontSize: 17, top: 5, left: 8.5, color: 'grey'},
  message: {fontSize: 21, top: 5, left: 3, color: 'black'},
  textName: {fontSize: 23, fontWeight: 'bold', top: 5, left: 10},
});

export default Comments;
