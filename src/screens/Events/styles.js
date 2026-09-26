import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {vs, s} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const style = StyleSheet.create({
  eventImageBG: {
    width: s(150),
    height: Platform.OS === 'ios' ? vs(140) : vs(163),
    marginHorizontal: s(9),
    marginVertical: vs(10),
  },
  flatListStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: s(20),
  },
  eventTitle: {
    color: Colors.white,
    fontSize: Fonts.size.xm,
    fontFamily: Fonts.family.PoppinsRegular,
    position: 'absolute',
    bottom: vs(10),
    paddingLeft: s(10),
    width: s(140),
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: s(15),
    borderRadius: 10,
  },
  dateTxt: {
    paddingHorizontal: s(5),
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    color: Colors.black,
    fontSize: Fonts.size.xs,
    fontFamily: Fonts.family.PoppinsSemiBold,
    backgroundColor: Colors.lightWhite,
    alignSelf: 'flex-end',
  },
});
