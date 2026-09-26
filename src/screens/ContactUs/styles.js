import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  contact: {
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsSemiBold,
    margin: ms(6),
    width: ms(265),
    color: Colors.white,
  },
  icon: {
    height: ms(16),
    width: ms(16),
    resizeMode: 'contain',
    margin: ms(20),
    tintColor: Colors.white,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
});
