import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: vs(80),
  },
  header: {
    fontSize: Fonts.size.xl,
    fontFamily: Fonts.family.PoppinsBold,
    textAlign: 'center',
    color: Colors.darkPrimaryColor,
  },
  profileImage: {
    height: ms(140),
    width: ms(130),
  },
  profileImgView: {
    backgroundColor: Colors.lightPrimaryColor,
    height: ms(155),
    width: ms(125),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Platform.OS === 'ios' ? vs(10) : vs(10),
  },
  profileName: {
    color: Colors.PrimaryColor,
    fontSize: Fonts.size.xl,
    textAlign: 'center',
    fontFamily: Fonts.family.PoppinsSemiBold,
  },
  profileOccupation: {
    color: Colors.PrimaryColor,
    fontSize: Fonts.size.lx,
    textAlign: 'center',
    fontFamily: Fonts.family.PoppinsSemiBold,
    bottom: Platform.OS === 'ios' ? vs(2) : vs(9),
  },
  content: {
    fontSize: Fonts.size.s,
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsRegular
        : Fonts.family.PoppinsMedium,
    marginTop: Platform.OS === 'ios' ? vs(10) : vs(0),
    color: Colors.darkPrimaryColor,
  },
  buttonView: {
    position: 'absolute',
    bottom: vs(20),
    height: vs(40),
    width: '85%',
    backgroundColor: Colors.PrimaryColor,
    borderRadius: Platform.OS === 'ios' ? 10 : 7,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: Colors.black,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    elevation: 20,
  },
  vialogoImg: {
    height: ms(40),
    width: s(46),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: ms(15),
    marginRight: ms(15),
  },
});
