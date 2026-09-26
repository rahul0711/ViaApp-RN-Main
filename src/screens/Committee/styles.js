import {StyleSheet, Platform} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';
import {Fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  listView: {
    height: vs(50),
    backgroundColor: Colors.lightPrimaryColor,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: vs(10),
    marginHorizontal: s(15),
    justifyContent: 'center',
  },
  listTitle: {
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsMedium,
    textAlign: 'center',
    color: Colors.PrimaryColor,
    marginLeft: s(10),
  },
  rightIcon: {
    height: ms(20),
    width: ms(20),
    resizeMode: 'contain',
  },
  committeeIcon: {
    height: ms(30),
    width: ms(30),
    resizeMode: 'contain',
  },
  cart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    height: vs(110),
    width: s(120),
    resizeMode: 'stretch',
  },
  designationHolder: {
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsSemiBold
        : Fonts.family.PoppinsBold,
    fontSize: Fonts.size.m,
    color: Colors.darkPrimaryColor,
  },
  designation: {
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    fontSize: Fonts.size.xm,
    color: Colors.darkPrimaryColor,
  },
});
