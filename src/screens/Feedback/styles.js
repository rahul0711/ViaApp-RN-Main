import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  contact: {
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsMedium,
    marginHorizontal: s(3),
    paddingTop: vs(10),
    color: Colors.darkPrimaryColor,
  },
  input: {
    height: ms(60),
    borderWidth: 1,
    backgroundColor: Colors.lightPrimaryColor,
    borderRadius: 10,
    borderColor: Colors.lightPrimaryColor,
    fontFamily: Fonts.family.PoppinsMedium,
    fontSize: Fonts.size.l,
    paddingLeft: s(15),
    color: Colors.darkPrimaryColor,
  },
  buttonView: {
    height: ms(60),
    width: '100%',
    backgroundColor: Colors.PrimaryColor,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: vs(30),
  },
});
