import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  listView: {
    backgroundColor: Colors.lightPrimaryColor,
    borderRadius: 10,
    margin: ms(10),
    paddingBottom: vs(10),
  },
  contactView: {
    backgroundColor: Colors.PrimaryColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  listTitle: {
    fontSize: Fonts.size.l,
    color: Colors.white,
    fontFamily: Fonts.family.PoppinsBold,
    textAlign: 'center',
    margin: ms(10),
  },
  contact: {
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsMedium,
    textAlign: 'center',
    margin: ms(10),
  },
});
