import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms, s, vs} from 'react-native-size-matters';
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
    paddingVertical: vs(7),
    borderTopRightRadius: 10,
  },
  listTitle: {
    fontSize: Fonts.size.m,
    color: Colors.white,
    fontFamily: Fonts.family.PoppinsMedium,
    textAlign: 'center',
  },
  contact: {
    fontSize: Fonts.size.m,
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    marginLeft: s(7),
    color: Colors.darkPrimaryColor,
  },
});
