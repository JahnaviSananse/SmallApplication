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
import FullProfileCard from '../../components/FullProfileCard';
import {API_CALL_GET} from '../../api/request';
const FullProfile = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let url = `${BASE_URL}/user/${props.route.params?.fullProfile}`;
    API_CALL_GET(url).then(data => setList([data]));
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
