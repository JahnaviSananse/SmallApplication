import React, {useState, useEffect} from 'react';
import {BASE_URL} from '../../constants/api';
import {SafeAreaView, FlatList} from 'react-native';
import styles from './style';
import OwnerProfileCard from '../../components/OwnerProfileCard';
import {API_CALL_GET} from '../../api/request';

const OwnerProfile = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let url = `${BASE_URL}/user/${props.route.params?.ownerId}`;
    API_CALL_GET(url).then(data => setList([data]));
  }, []);

  const renderItem = ({item}) => {
    return (
      <OwnerProfileCard
        picture={item.picture}
        id={item.id}
        name={item.title + '. ' + item.firstName + ' ' + item.lastName}
        email={item.email}
        gender={item.gender}
        dateOfBirth={item.dateOfBirth}
        registerDate={item.registerDate}
        phone={item.phone}
        address={
          item.location.country +
          ',' +
          item.location.country +
          ',' +
          item.location.country
        }
        street={item.location.street}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default OwnerProfile;
