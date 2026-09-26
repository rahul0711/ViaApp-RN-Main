import {StyleSheet} from 'react-native';
import {ms, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';
import {Fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  listView: {
    height: ms(100),
    width: ms(100),
    backgroundColor: Colors.lightPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: vs(15),
  },
  listTitle: {
    fontSize: Fonts.size.s,
    fontFamily: Fonts.family.PoppinsMedium,
    textAlign: 'center',
    color: Colors.darkPrimaryColor,
  },
  listIcon: {
    height: ms(30),
    width: ms(30),
    resizeMode: 'contain',
  },
});
