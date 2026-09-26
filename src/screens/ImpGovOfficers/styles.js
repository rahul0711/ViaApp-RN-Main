import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';
export const styles = StyleSheet.create({
  listView: {
    backgroundColor: Colors.lightPrimaryColor,
    borderRadius: 10,
    marginVertical: vs(10),
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
    margin: ms(8),
  },
  contact: {
    fontSize: Fonts.size.xm,
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    textAlign: 'center',
    color: Colors.darkPrimaryColor,
    alignSelf: 'center',
    margin: ms(5),
  },
});
