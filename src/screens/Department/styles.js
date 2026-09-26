import {Platform, StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';
import {Fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  listView: {
    height: ms(100),
    width: '30%',
    backgroundColor: Colors.lightPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: vs(15),
    marginRight: '5%',
  },
  listTitle: {
    fontSize: Fonts.size.s,
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    textAlign: 'center',
    marginTop: vs(10),
    color: Colors.black,
  },
  listIcon: {
    height: ms(30),
    width: ms(30),
    resizeMode: 'contain',
  },
  detailView: {
    backgroundColor: Colors.lightPrimaryColor,
    borderRadius: 10,
    marginVertical: vs(10),
    // paddingBottom: vs(10),
  },
  contactView: {
    backgroundColor: Colors.PrimaryColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailTitle: {
    fontSize: Fonts.size.m,
    color: Colors.white,
    fontFamily: Fonts.family.PoppinsBold,
    textAlign: 'center',
    margin: ms(10),
  },
  contact: {
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsSemiBold,
    textAlign: 'center',
    margin: ms(5),
    color: Colors.darkPrimaryColor,
  },
});
