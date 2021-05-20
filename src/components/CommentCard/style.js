import {StyleSheet} from 'react-native';
import THEME from '../../constants/colors';
const styles = StyleSheet.create({
  stretch: {
    width: 65,
    height: 65,
    borderRadius: 40,
  },
  mainView: {
    width: '96%',
    padding: '3%',
    margin: '5%',
    backgroundColor: THEME.PATTENS_BLUE,
    alignSelf: 'center',
    borderRadius: 10,
  },
  border: {
    borderBottomWidth: 1.5,
    margin: 10,
    width: '100%',
    right: 9,
  },
  row: {flexDirection: 'row'},
  column: {flexDirection: 'column'},
  publishDate: {fontSize: 17, top: 5, left: 8.5, color: THEME.GREY},
  message: {fontSize: 21, top: 5, left: 3, color: THEME.BLACK},
  textName: {fontSize: 23, fontWeight: 'bold', top: 5, left: 10},
});
export default styles;
