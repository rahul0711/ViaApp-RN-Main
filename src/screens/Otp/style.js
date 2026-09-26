import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {Colors} from '../../styles/colors';
import {ms, s, vs} from 'react-native-size-matters';

export const styles = StyleSheet.create({
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
  otpDigit: {
    marginHorizontal: s(40),
  },
  otpTextInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.PrimaryColor,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightPrimaryColor,
    marginHorizontal: 5,
  },

  focusStyle: {
    borderColor: Colors.darkPrimaryColor,
  },

  otpChar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkPrimaryColor,
    textAlign: 'center',
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
  submitView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    paddingHorizontal: s(20),
  },
  logo: {
    height: ms(200),
    width: ms(200),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: vs(10),
  },
});
