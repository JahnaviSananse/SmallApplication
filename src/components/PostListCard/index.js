import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IMAGE} from '../../assets/images/images';
import styles from './style';
import * as STRING from '../../constants/constant';
const PostListCard = props => {
  const {
    picture,
    name,
    email,
    image,
    tags,
    text,
    link,
    likes,
    publishDate,
    OwnerProfilePress,
    commentPress,
  } = props;
  return (
    <View style={styles.mainView}>
      <View style={styles.row}>
        <Image style={styles.dp} source={{uri: picture}} />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}> {email}</Text>
        </View>
      </View>
      <View style={styles.border} />
      <Image style={styles.stretch} source={{uri: image}} />
      <View style={styles.row}>
        {tags.map(value => {
          return <Text style={styles.tags}> {value}</Text>;
        })}
      </View>
      <Text style={styles.text}> {text}</Text>
      <Text style={styles.link}> {link}</Text>
      <View style={styles.border} />
      <View style={styles.row}>
        <Image style={styles.likeButton} source={IMAGE.FILLHEART} />
        <Text style={styles.likeDigit}> {likes}</Text>
        <Text style={styles.like}> {STRING.LIKES}</Text>
        <Text style={styles.publishDate}> {publishDate}</Text>
      </View>
      <View style={styles.border} />
      <TouchableOpacity>
        <Text style={styles.navComments}> {STRING.GET_POST_COMMENTS} </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navComments}> {STRING.GET_OWNER_PROFILE}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PostListCard;
