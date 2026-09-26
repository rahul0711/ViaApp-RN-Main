import {Platform, StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../styles/colors';
import {Fonts} from '../styles/fonts';
export const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
  },
  closeIconeView: {
    marginTop: vs(15),
    flexDirection: 'row-reverse',
    marginLeft: s(15),
  },
  closeIcone: {
    height: ms(12),
    width: ms(12),
    resizeMode: 'contain',
  },
  profileText: {
    fontSize: Fonts.size.s,
    fontFamily: Fonts.family.PoppinsMedium,
    color: Colors.white,
  },
  tabBar: {
    height: Platform.OS === 'ios' ? vs(70) : vs(50),
    backgroundColor: Colors.lightPrimaryColor,
    paddingTop: s(20),
  },
  bottomLine: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: s(1),
    backgroundColor: Colors.PrimaryColor, 
  },
  bottomTxt: {
    fontSize: Fonts.size.xs,
    color: Colors.white, 
    fontFamily: Fonts.family.PoppinsMedium,
  },
  tabLabel: {
    fontSize: Fonts.size.xs,
    marginTop: Platform.OS === 'ios' ? vs(10) : vs(5),
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsSemiBold
        : Fonts.family.PoppinsBold,
  },
  numberView: {
    height: ms(17),
    width: ms(17),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PrimaryColor,
    position: 'absolute',
    top: -5,
    right: -8,
    zIndex: 1,
  },
  number: {
    color: Colors.white,
    fontSize: Fonts.size.xxs,
  },
  logoView: {
    height: vs(100),
    width: '100%',
    backgroundColor: Colors.white,
    marginBottom: vs(10),
    paddingHorizontal: s(10),
  },
  logo: {
    height: vs(100),
    width: s(250),
    resizeMode: 'contain',
  },
});
