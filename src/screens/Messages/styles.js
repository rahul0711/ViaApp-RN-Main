import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  msgSection: {
    marginVertical: vs(10),
    justifyContent: 'center',
  },
  titleView: {
    backgroundColor: Colors.PrimaryColor,
    borderRadius: 12,
    padding: ms(10),
    flex: 1,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.dividerColor,
    marginTop: vs(8),
  },
  date: {
    flex: 1,
    textAlign: 'right',
    marginRight: vs(10),
    color: Colors.black,
    fontFamily: Fonts.family.PoppinsItalic,
  },
  textStyle: {
    fontSize: Fonts.size.s,
    fontFamily: Fonts.family.PoppinsMedium,
    color: Colors.white,
  },
  lessTextStyle: {
    fontFamily: Fonts.family.PoppinsBoldItalic,
    color: Colors.white,
    marginTop: vs(5),
  },
});
