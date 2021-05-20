import {StyleSheet} from 'react-native';

StyleSheet;
const styles = StyleSheet.create({
  stretch: {
    width: 355,
    height: 400,
  },
  mainView: {
    width: '95%',
    padding: '4%',
    margin: '5%',
    backgroundColor: '#dae1e7',
    // position: 'relative',
    alignSelf: 'center',
    borderRadius: 10,
  },
  likeButton: {
    height: 15,
    width: 15,
    top: 5,
  },
  dp: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  like: {fontSize: 16, left: 7, top: 1},
  like: {fontSize: 16, left: 7, top: 1},
  navComments: {
    fontSize: 16,
    left: 7,
    top: 3,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  textEmail: {fontSize: 13, top: 3, left: 3},
  link: {fontSize: 15, top: 7, color: 'black', left: 3, color: 'blue'},
  likeDigit: {fontSize: 16, top: 1, color: 'black', left: 3},
  publishDate: {
    fontSize: 15,
    top: 2.5,
    color: 'grey',
    left: 169,
  },
  textName: {fontSize: 20, fontWeight: 'bold', top: 10, left: 5},
  textID: {fontSize: 19, color: 'grey', top: 10},
  text: {fontSize: 21, color: 'black', top: 10},
  tags: {
    top: 5,
    fontSize: 15,
    color: 'black',
    borderRadius: 15,
    backgroundColor: '#ff0066',
    margin: 5,
    padding: 5,
  },
  email: {fontSize: 17, color: 'grey', left: 6},
  name: {fontSize: 23, color: 'black', left: 10},
});

export default styles;
