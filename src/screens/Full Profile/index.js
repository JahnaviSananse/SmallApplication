import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../constants/api';
import styles from './style';
import MapView from 'react-native-maps';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {getDateMonth} from '../../utility/util';
import {APP_ID} from '../../constants/api';
import * as STRING from '../../constants/constant';
import FullProfileCard from '../../components/FullProfileCard';
const FullProfile = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/${props.route.params?.fullProfile}`, {
        headers: {'app-id': APP_ID},
      })
      .then(({data}) => setList([data]))
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    return (
      <FullProfileCard
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
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default FullProfile;
