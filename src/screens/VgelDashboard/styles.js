import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';
import {Fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  listView: {
    height: ms(100),
    width: ms(100),
    backgroundColor: Colors.lightPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: vs(15),
  },
  listTitle: {
    fontSize: Fonts.size.s,
    fontFamily: Fonts.family.PoppinsMedium,
    textAlign: 'center',
    color: Colors.darkPrimaryColor,
    paddingHorizontal: s(10),
  },
  listIcon: {
    height: ms(30),
    width: ms(30),
    resizeMode: 'contain',
  },
  vgelLogo: {
    height: s(100),
    width: '92%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  vgelPhoto: {
    height: s(200),
    resizeMode: 'contain',
    marginHorizontal: s(15),
    borderRadius: 10,
  },
  bottomLink: {
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsSemiBold,
    textAlign: 'center',
    color: Colors.PrimaryColor,
    textDecorationLine: 'underline',
    marginBottom: vs(10),
  },
});
