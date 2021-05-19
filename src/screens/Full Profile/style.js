import {StyleSheet} from 'react-native';

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
    backgroundColor: '#dae1e7',
    // position: 'relative',
    alignSelf: 'center',
    borderRadius: 10,
  },
  row: {flexDirection: 'row'},
  column: {flexDirection: 'column'},
  dp: {
    width: 90,
    height: 90,
  },
  email: {
    fontSize: 10,
    left: 5,
  },
  address: {
    fontSize: 9,
    left: 3,
    fontWeight: 'bold',
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
  border: {borderBottomWidth: 1, margin: 10, width: '100%', right: 9},
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

export default styles;
