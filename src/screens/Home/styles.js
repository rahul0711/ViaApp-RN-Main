import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleHeaderStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(15),
  },
  activeDot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: Colors.darkPrimaryColor,
    marginLeft: 5,
  },
  unActiveDot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: Colors.grey,
    marginLeft: 5,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {
    backgroundColor: Colors.lightPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: ms(110),
    borderRadius: 15,
    marginBottom: vs(10),
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: s(80),
    height: vs(40),
    marginTop: vs(5),
  },
  listTitle: {
    textAlign: 'center',
    fontSize: Fonts.size.xs,
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    color: Colors.darkPrimaryColor,
  },
  numberView: {
    height: ms(20),
    width: ms(20),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PrimaryColor,
    position: 'absolute',
    top: -10,
    right: -10,
    zIndex: 1,
  },
  number: {
    color: Colors.white,
    fontSize: Fonts.size.xxs,
    fontFamily: Fonts.family.PoppinsMedium,
  },
  imageView: {
    height: vs(150),
    width: '90%',
    alignSelf: 'center',
    marginTop: vs(20),
    borderRadius: 10,
    resizeMode: 'contain',
  },
  listIcon: {
    tintColor: Colors.black,
  },
});
