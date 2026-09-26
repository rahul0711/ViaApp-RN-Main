import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';

import {ms, vs} from 'react-native-size-matters';
import {s} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  backView: {
    height: ms(46),
    width: ms(46),
    borderRadius: 10,
    backgroundColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.darkPrimaryColor,
    fontSize: Fonts.size.l,
    fontFamily: Fonts.family.PoppinsRegular,
    width: '100%',
    marginVertical: vs(10),
    lineHeight: vs(25),
  },
});
