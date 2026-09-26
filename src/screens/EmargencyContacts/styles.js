import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  listView: {
    backgroundColor: Colors.lightPrimaryColor,
    borderRadius: 10,
    marginVertical: vs(10),
    paddingBottom: vs(5),
  },
  contactView: {
    backgroundColor: Colors.PrimaryColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  listTitle: {
    fontSize: Fonts.size.m,
    color: Colors.white,
    fontFamily: Fonts.family.PoppinsBold,
    textAlign: 'center',
    margin: ms(5),
  },
  contact: {
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsSemiBold,
    textAlign: 'center',
    marginLeft: s(5),
    color: Colors.darkPrimaryColor,
  },
});
