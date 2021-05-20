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
      <View style={styles.mainView}>
        <View style={styles.row}>
          <Image style={styles.dp} source={{uri: item.picture}} />
          <View style={styles.colum}>
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
          <View style={styles.column}>
            <Text style={styles.address}> Address</Text>
            <Text style={styles.name}>
              {item.location.country +
                ',' +
                item.location.country +
                ',' +
                item.location.country}
            </Text>
            <Text style={styles.street}>{item.location.street} </Text>
            <MapView
              style={{flex: 1}}
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
          <Text style={styles.navComments}> GET FULL PROFILE </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navComments}> GET OWNER PROFILE</Text>
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

export default FullProfile;
