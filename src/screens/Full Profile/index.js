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

const FullProfile = props => {
  const [list, setList] = useState([]);

  // const APP_ID = '60a2006068a4f057f0c70e0f';
  const APP_ID = '60a4b70100c81f3310527bd1';
  // const APP_ID = '60a353bb301f6600f7a467af';
  // console.log('IIIIIIIIIIIIIIIIII', props.route.params?.ownerId);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/${props.route.params?.fullProfile}`, {
        headers: {'app-id': APP_ID},
      })
      .then(({data}) => setList([data]))
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    // console.log('itemssss=============>');
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
            <Text style={styles.date}>{'DOB:' + item.dateOfBirth}</Text>
            <Text style={styles.date}>{'RD:' + item.registerDate}</Text>
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
        {/* {console.log('$$$$$$$$$$$$$$$4444', item.id)} */}
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
      {console.log('List>>>>>', list)}
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default FullProfile;
