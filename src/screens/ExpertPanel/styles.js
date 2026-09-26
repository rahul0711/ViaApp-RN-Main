import {Platform, StyleSheet} from 'react-native';
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
  name: {
    fontSize: Fonts.size.m,
    color: Colors.darkPrimaryColor,
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsSemiBold
        : Fonts.family.PoppinsBold,
    margin: ms(5),
    marginHorizontal: s(15),
  },
  listTitle: {
    fontSize: Fonts.size.m,
    color: Colors.white,
    fontFamily: Fonts.family.PoppinsSemiBold,
    textAlign: 'center',
    margin: ms(10),
  },
  contact: {
    fontSize: Fonts.size.xm,
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    textAlign: 'center',
    marginLeft: s(5),
    color: Colors.darkPrimaryColor,
  },
  line: {
    borderWidth: 0.5,
    borderColor: Colors.PrimaryColor,
    marginHorizontal: s(15),
  },
});
