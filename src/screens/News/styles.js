import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms, vs, s} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  newsSection: {
    marginVertical: vs(10),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  newsImage: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.placeHolderColor,
    width: Platform.OS === 'ios' ? ms(90) : ms(90),
    height: Platform.OS === 'ios' ? ms(90) : ms(90),
  },
  flatListStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsTitle: {
    color: Colors.black,
    fontSize: Fonts.size.xm,
    fontFamily: Fonts.family.PoppinsRegular,
    paddingLeft: s(10),
    width: ms(250),
  },
  dateTxt: {
    color: Colors.black,
    fontSize: Fonts.size.xs,
    fontFamily: Fonts.family.PoppinsSemiBold,
    position: 'absolute',
    bottom: s(-2),
    left: vs(10),
  },
});
