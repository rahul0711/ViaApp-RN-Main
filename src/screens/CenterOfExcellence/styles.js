import {StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import {Fonts} from '../../styles/fonts';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  dummyDetailImg: {
    width: '100%',
    height: vs(250),
    justifyContent: 'flex-end',
  },
  detailSection: {
    marginTop: s(10),
  },
  detailTitle: {
    fontFamily: Fonts.family.PoppinsBold,
    color: Colors.white,
    fontSize: Fonts.size.l,
    width: s(350),
    paddingBottom: vs(5),
  },
  detailText: {
    fontFamily: Fonts.family.PoppinsRegular,
    fontSize: Fonts.size.m,
    paddingBottom: vs(10),
    color: Colors.darkPrimaryColor,
  },
  detail: {
    fontFamily: Fonts.family.PoppinsRegular,
    fontSize: Fonts.size.l,
    paddingBottom: vs(10),
    color: Colors.darkPrimaryColor,
    textDecorationLine: 'underline',
  },
  detailView: {
    marginTop: vs(10),
  },
  linearGradient: {
    paddingHorizontal: s(15),
    height: vs(150),
    justifyContent: 'flex-end',
  },
});
