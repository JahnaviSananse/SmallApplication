import {StyleSheet} from 'react-native';
import THEME from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stretch: {
    width: 356,
    height: 400,
  },
  mainView: {
    width: '95%',
    padding: '4%',
    margin: '5%',
    backgroundColor: THEME.PATTENS_BLUE,
    alignSelf: 'center',
    borderRadius: 10,
  },
  row: {flexDirection: 'row'},
  likeButton: {
    height: 15,
    width: 15,
    top: 5,
  },
  border: {
    borderBottomWidth: 1,
    margin: 10,
    width: '100%',
    right: 9,
  },
  dp: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  like: {fontSize: 16, left: 7, top: 1},
  navComments: {
    fontSize: 16,
    left: 7,
    top: 3,
    color: THEME.BLUE,
    textDecorationLine: 'underline',
  },
  textEmail: {fontSize: 13, top: 3, left: 3},
  link: {fontSize: 15, top: 7, color: THEME.BLACK, left: 3, color: THEME.BLUE},
  likeDigit: {fontSize: 16, top: 1, color: THEME.BLACK, left: 3},
  publishDate: {
    fontSize: 15,
    top: 2.5,
    color: THEME.GREY,
    left: 150,
  },
  textName: {fontSize: 20, fontWeight: 'bold', top: 10, left: 5},
  textID: {fontSize: 19, color: THEME.GREY, top: 10},
  text: {fontSize: 21, color: THEME.BLACK, top: 10},
  tags: {
    top: 5,
    fontSize: 15,
    color: THEME.BLACK,
    borderRadius: 15,
    backgroundColor: '#ff0066',
    margin: 5,
    padding: 5,
  },
  email: {fontSize: 17, color: THEME.GREY, left: 6},
  name: {fontSize: 23, color: THEME.BLACK, left: 10},
});

export default styles;
