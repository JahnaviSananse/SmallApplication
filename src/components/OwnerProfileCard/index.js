import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import {getDateMonth} from '../../utility/util';
import styles from './style';
import * as STRING from '../../constants/constant';

const OwnerProfileCard = props => {
  const {
    picture,
    id,
    name,
    email,
    gender,
    dateOfBirth,
    registerDate,
    phone,
    address,
    street,
  } = props;
  return (
    <View style={styles.mainView}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.dp} source={{uri: picture}} />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.id}>{id} </Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email} </Text>
          <Text style={styles.gender}>{'Gender:' + gender} </Text>
          <Text style={styles.date}>{'DOB:' + getDateMonth(dateOfBirth)}</Text>
          <Text style={styles.date}>{'RD:' + getDateMonth(registerDate)}</Text>
          <Text style={styles.num}>{'PHONE:' + phone}</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 9}}> {STRING.ADDRESS}</Text>
          <Text style={styles.name}>{address}</Text>
          <Text style={styles.street}>{street} </Text>
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

export default OwnerProfileCard;
