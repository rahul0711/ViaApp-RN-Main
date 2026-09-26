import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  contact: {
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsMedium,
    marginHorizontal: s(8),
    paddingTop: vs(10),
    color: Colors.darkPrimaryColor,
  },
  policyTxt: {
    fontSize: Fonts.size.xs,
    fontFamily: Fonts.family.PoppinsMedium,
    color: Colors.darkPrimaryColor,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkTxt: {
    fontSize: Fonts.size.xs,
    fontFamily: Fonts.family.PoppinsMedium,
    color: Colors.PrimaryColor,
    textDecorationLine: 'underline'
  },
  menuView: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    height: ms(46),
    width: ms(46),
    borderRadius: 10,
    backgroundColor: Colors.offWhite,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: s(15),
  },
  menuTitle: {
    fontSize: Fonts.size.xxl,
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsBold
        : Fonts.family.PoppinsExtraBold,
    textAlign: 'center',
    marginTop: vs(10),
    color: Colors.darkPrimaryColor,
  },
  input: {
    height: ms(50),
    borderWidth: 1,
    padding: ms(10),
    backgroundColor: Colors.lightPrimaryColor,
    borderRadius: 12,
    borderColor: Colors.lightPrimaryColor,
    fontFamily: Fonts.family.PoppinsRegular,
    fontSize: Fonts.size.l,
    marginTop: vs(5),
    color: Colors.darkPrimaryColor,
  },
  submitView: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  paddingHorizontal: s(20),
},
  buttonView: {
    height: ms(50),
    width: '100%',
    backgroundColor: Colors.PrimaryColor,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    elevation: 20,
  },
  otpDigit: {
    marginTop: vs(20),
    marginHorizontal: s(40),
  },
  otpTextInput: {
    width: ms(50),
    height: ms(50),
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: Colors.lightPrimaryColor,
    color: Colors.PrimaryColor,
  },
  logo: {
    height: ms(200),
    width: ms(200),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: vs(10),
  },
});
