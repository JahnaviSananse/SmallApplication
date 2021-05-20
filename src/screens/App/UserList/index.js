import React, {useState, useEffect} from 'react';
import {BASE_URL} from '../../../constants/api';
import {SafeAreaView, FlatList} from 'react-native';
import UserListCard from '../../../components/UserListCard/index';
import styles from './style';
import {API_CALL_GET} from '../../../api/request';

const UserList = ({navigation}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    let url = `${BASE_URL}/user`;
    API_CALL_GET(url).then(data => setList(data));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/user`, {headers: {'app-id': APP_ID}})
  //     .then(({data}) => setList(data))
  //     .catch(console.error);
  // }, []);

  const renderItem = ({item}) => {
    return (
      <UserListCard
        picture={item.picture}
        id={item.id}
        name={item.title + '. ' + item.firstName + ' ' + item.lastName}
        email={item.email}
        FullProfilePress={() =>
          navigation.navigate('FullProfile', {
            fullProfile: item.id,
          })
        }
        PostListPress={() =>
          navigation.navigate('PostList', {postList: item.id})
        }
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

export default UserList;
