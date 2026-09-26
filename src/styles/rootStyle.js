import {Platform, StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from './colors';
import {Fonts} from './fonts';

export const rootStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  justifyCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mH15: {
    marginHorizontal: s(15),
  },
  mH10: {
    marginHorizontal: s(10),
  },
  mV10: {
    marginVertical: vs(10),
  },
  mHL: {
    marginLeft: s(15),
  },
  mB15: {
    marginBottom: vs(15),
  },
  mL15: {
    marginLeft: s(15),
  },
  mT10: {
    marginTop: Platform.OS === 'ios' ? vs(5) : vs(10),
  },
  commonPadding: {
    paddingHorizontal: s(16),
  },
  flexRow: {
    flexDirection: 'row',
    zIndex: 999,
  },
  flexcl: {
    flexDirection: 'column',
  },
  nameSection: {
    marginLeft: s(15),
  },
  designationHolder: {
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsSemiBold
        : Fonts.family.PoppinsBold,
    fontSize: Fonts.size.xm,
    textAlign: 'center',
    color: Colors.darkPrimaryColor,
  },
  designation: {
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    fontSize: Fonts.size.s,
    color: Colors.darkPrimaryColor,
    textAlign: 'center',
  },
  organisation: {
    marginLeft: s(10),
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    fontSize: Fonts.size.xm,
    color: Colors.darkPrimaryColor,
  },
  iconView: {
    backgroundColor: Colors.PrimaryColor,
    width: ms(25),
    height: ms(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  icon: {
    width: ms(16),
    height: ms(16),
    resizeMode: 'contain',
  },
  iconFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vs(5),
  },
  iconValue: {
    marginLeft: s(10),
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    fontSize: Fonts.size.s,
    color: Colors.darkPrimaryColor,
  },
  emailText: {
    marginLeft: s(10),
    fontFamily:
      Platform.OS === 'ios'
        ? Fonts.family.PoppinsMedium
        : Fonts.family.PoppinsSemiBold,
    fontSize: Fonts.size.xm,
    color: Colors.darkPrimaryColor,
  },
  bottomStyle: {
    marginBottom: vs(20),
  },
  modalClose: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      Platform.OS === 'ios'
        ? Colors.blackTransparent
        : Colors.blackLightTransparent,
  },
  designationHolderImg: {
    height: ms(130),
    width: ms(100),
    resizeMode: 'contain',
    borderRadius: 10,
    alignSelf: 'center',
  },
  numberModal: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    width: '70%',
    paddingHorizontal: s(20),
  },
  modelTitle: {
    marginTop: vs(5),
    fontFamily: Fonts.family.PoppinsMedium,
    fontSize: Fonts.size.m,
    marginVertical: s(10),
    color: Colors.darkPrimaryColor,
  },
  numbersInModal: {
    fontFamily: Fonts.family.PoppinsSemiBold,
    fontSize: Fonts.size.l,
    color: Colors.darkPrimaryColor,
  },
  mT: {
    marginTop: vs(15),
  },
  mT30: {
    marginTop: vs(30),
  },
  margin: {
    margin: ms(5),
  },
  mainBox: {
    marginVertical: vs(8),
    backgroundColor: Colors.lightPrimaryColor,
    width: '100%',
    borderRadius: 12,
  },
  containBox: {
    paddingVertical: vs(10),
    paddingHorizontal: s(10),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      Platform.OS === 'ios'
        ? Colors.blackTransparent
        : Colors.blackLightTransparent,
  },
  modalView: {
    height: s(120),
    width: vs(240),
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: ms(20),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsMedium,
    color: Colors.black,
  },
  buttonText: {
    color: Colors.white,
    fontSize: Fonts.size.l,
    fontFamily: Fonts.family.PoppinsMedium,
    lineHeight: vs(30),
  },
});
