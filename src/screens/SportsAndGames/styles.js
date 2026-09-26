import {Platform, StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';
import {Fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  listView: {
    backgroundColor: Colors.lightPrimaryColor,
    marginHorizontal: s(15),
    marginTop: vs(20),
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  nameView: {
    paddingVertical: vs(15),
    paddingLeft: s(15),
  },
  listName: {
    fontSize: Fonts.size.l,
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    width: s(200),
    color: Colors.darkPrimaryColor,
  },
  listSubName: {
    fontSize: Fonts.size.s,
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    color: Colors.darkPrimaryColor,
  },
  priceText: {
    color: Colors.white,
    fontSize: Fonts.size.l,
    fontFamily: Fonts.family.PoppinsMedium,
  },
  priceView: {
    backgroundColor: Colors.PrimaryColor,
    borderRadius: 10,
    width: s(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
