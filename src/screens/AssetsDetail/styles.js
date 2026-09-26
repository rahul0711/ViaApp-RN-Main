import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  listView: {
    backgroundColor: Colors.lightPrimaryColor,
    borderRadius: 10,
    marginVertical: vs(8),
    paddingBottom: vs(10),
  },
  contactView: {
    backgroundColor: Colors.PrimaryColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: vs(10),
  },
  listTitle: {
    fontSize: Fonts.size.xl,
    color: Colors.white,
    fontFamily: Fonts.family.PoppinsMedium,
    textAlign: 'center',
    margin: ms(10),
  },
  contact: {
    fontSize: Platform.OS === 'ios' ? Fonts.size.m : Fonts.size.s,
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.Poppins
        : Fonts.family.PoppinsSemiBold,
    marginHorizontal: Platform.OS === 'ios' ? s(10) : s(8),
    lineHeight: vs(25),
    width: ms(230),
    color: Colors.darkPrimaryColor,
  },
});
