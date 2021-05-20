import React from 'react';
import {View, Text, Image, SafeAreaView, FlatList} from 'react-native';
import {getDateMonth} from '../../utility/util';
import styles from './style';

const CommentCard = props => {
  const {picture, name, publishDate, message} = props;
  return (
    <View style={styles.mainView}>
      <View style={styles.row}>
        <Image style={styles.stretch} source={{uri: picture}} />
        <View style={styles.column}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.publishDate}>{getDateMonth(publishDate)}</Text>
        </View>
      </View>
      <View style={styles.border} />
      <Text style={styles.message}> {message}</Text>
    </View>
  );
};

export default CommentCard;
