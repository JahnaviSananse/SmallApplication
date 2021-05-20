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
import MapView from 'react-native-maps';
import {APP_ID} from '../../constants/api';
import {getDateMonth} from '../../utility/util';
import styles from './style';
import * as STRING from '../../constants/constant';

const OwnerProfile = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/${props.route.params?.ownerId}`, {
        headers: {'app-id': APP_ID},
      })
      .then(({data}) => setList([data]))
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.mainView}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.dp} source={{uri: item.picture}} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.id}>{item.id} </Text>
            <Text style={styles.name}>
              {item.title + '. ' + item.firstName + ' ' + item.lastName}
            </Text>
            <Text style={styles.email}>{item.email} </Text>
            <Text style={styles.gender}>{'Gender:' + item.gender} </Text>
            <Text style={styles.date}>
              {'DOB:' + getDateMonth(item.dateOfBirth)}
            </Text>
            <Text style={styles.date}>
              {'RD:' + getDateMonth(item.registerDate)}
            </Text>
            <Text style={styles.num}>{'PHONE:' + item.phone}</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 9}}> {STRING.ADDRESS}</Text>
            <Text style={styles.name}>
              {item.location.country +
                ',' +
                item.location.country +
                ',' +
                item.location.country}
            </Text>
            <Text style={styles.street}>{item.location.street} </Text>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            />
          </View>
        </View>
        <View style={styles.border} />
        <TouchableOpacity>
          <Text style={styles.navComments}> {STRING.GET_FULL_PROFILE} </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navComments}> {STRING.GET_OWNER_PROFILE}</Text>
        </TouchableOpacity>
      </View>
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

export default OwnerProfile;
