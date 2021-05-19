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
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';

const OwnerProfile = props => {
  const [list, setList] = useState([]);

  // const APP_ID = '60a2006068a4f057f0c70e0f';
  const APP_ID = '60a4b70100c81f3310527bd1';
  // const APP_ID = '60a353bb301f6600f7a467af';
  // console.log('IIIIIIIIIIIIIIIIII', props.route.params?.ownerId);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/${props.route.params?.ownerId}`, {
        headers: {'app-id': APP_ID},
      })
      .then(({data}) => setList([data]))
      .catch(console.error);
  }, []);

  const renderItem = ({item}) => {
    // console.log('itemssss=============>');
    return (
      <View
        style={{
          width: '100%',
          padding: '2%',
          margin: '5%',
          backgroundColor: 'pink',
          // position: 'relative',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.dp} source={{uri: item.picture}} />
          <View style={{flexDirection: 'column'}}>
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
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 9}}> Address</Text>
            <Text style={styles.name}>
              {item.location.country +
                ',' +
                item.location.country +
                ',' +
                item.location.country}
            </Text>
            <Text style={styles.street}>{item.location.street} </Text>
            <MapView
              style={{flex: 1, left: 15, top: 2}}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            />
          </View>
        </View>
        <View
          style={{borderBottomWidth: 1, margin: 10, width: '100%', right: 9}}
        />
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
      {console.log('List==============>>>>>', list)}
      <FlatList
        data={list}
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
  dp: {
    width: 90,
    height: 90,
  },
  email: {
    fontSize: 10,
    left: 5,
  },
  street: {
    fontSize: 10,
    left: 5,
  },
  gender: {
    fontSize: 10,
    left: 5,
  },
  num: {
    fontSize: 10,
    left: 5,
  },
  date: {
    fontSize: 10,
    left: 5,
  },
  publishDate: {fontSize: 17, top: 5, left: 3, color: 'grey'},
  id: {
    fontSize: 9,
    left: 5,
    color: 'grey',
  },
  name: {
    fontSize: 10,
    left: 5,
  },
  navComments: {
    fontSize: 11,
    left: 7,
    top: 3,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  publishDate: {fontSize: 17, top: 5, left: 3, color: 'grey'},
  message: {fontSize: 21, top: 5, left: 3, color: 'black'},
  textName: {fontSize: 23, fontWeight: 'bold', top: 5, left: 10},
});

export default OwnerProfile;
