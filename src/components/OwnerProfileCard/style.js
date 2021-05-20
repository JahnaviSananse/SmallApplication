import {StyleSheet} from 'react-native';
import THEME from '../../constants/colors';
const styles = StyleSheet.create({
  stretch: {
    width: 65,
    height: 65,
    borderRadius: 40,
  },
  mainView: {
    width: '100%',
    padding: '2%',
    margin: '5%',
    backgroundColor: THEME.PATTENS_BLUE,
    alignSelf: 'center',
    borderRadius: 10,
  },
  border: {borderBottomWidth: 1, margin: 10, width: '100%', right: 9},
  map: {flex: 1, left: 15, top: 2},
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
  publishDate: {fontSize: 17, top: 5, left: 3, color: THEME.GREY},
  id: {
    fontSize: 9,
    left: 5,
    color: THEME.GREY,
  },
  name: {
    fontSize: 10,
    left: 5,
  },
  navComments: {
    fontSize: 11,
    left: 7,
    top: 3,
    color: THEME.BLUE,
    textDecorationLine: 'underline',
  },
  publishDate: {fontSize: 17, top: 5, left: 3, color: THEME.GREY},
  message: {fontSize: 21, top: 5, left: 3, color: THEME.BLACK},
  textName: {fontSize: 23, fontWeight: 'bold', top: 5, left: 10},
});

export default styles;
