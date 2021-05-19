import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    width: 320,
    height: 300,
  },
  mainView: {
    width: '90%',
    padding: '6%',
    margin: '5%',
    backgroundColor: '#dae1e7',
    // position: 'relative',
    alignSelf: 'center',
    borderRadius: 10,
  },
  navComments: {
    fontSize: 16,
    left: 7,
    top: 3,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  border: {borderBottomWidth: 1, margin: 12, width: '100%', right: 9},
  textEmail: {fontSize: 16, top: 5, left: 2},
  textName: {fontSize: 25, fontWeight: 'bold', top: 10, left: 5},
  textID: {fontSize: 22, color: 'grey', top: 10},
});

export default styles;
