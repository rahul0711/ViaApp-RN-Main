import {Platform, StatusBar, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const deviceHeight =
  Platform.OS === 'ios'
    ? height - 78 // iPhone X style SafeAreaView size in portrait
    : Platform.OS === 'android'
    ? height - Number(StatusBar.currentHeight)
    : height;

export function FontPercentage(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}
export function FontValue(fontSize) {
  const standardScreenHeight = 680;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export const Fonts = {
  family: {
    PoppinsBlack: 'Poppins-Black',
    PoppinsBlackItalic: 'Poppins-BlackItalic',
    PoppinsBold: 'Poppins-Bold',
    PoppinsBoldItalic: 'Poppins-BoldItalic',
    PoppinsExtraBold: 'Poppins-ExtraBold',
    PoppinsExtraBoldItalic: 'Poppins-ExtraBoldItalic',
    PoppinsExtraLight: 'Poppins-ExtraLight',
    PoppinsExtraLightItalic: 'Poppins-ExtraLightItalic',
    PoppinsItalic: 'Poppins-Italic',
    PoppinsLight: 'Poppins-Light',
    PoppinsLightItalic: 'Poppins-LightItalic',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsMediumItalic: 'Poppins-MediumItalic',
    PoppinsRegular: 'Poppins-Regular',
    PoppinsSemiBold: 'Poppins-SemiBold',
    PoppinsSemiBoldItalic: 'Poppins-SemiBoldItalic',
    PoppinsThin: 'Poppins-Thin',
    PoppinsThinItalic: 'Poppins-ThinItalic',
  },
  size: {
    xxs: FontValue(8),
    xs: FontValue(10),
    s: FontValue(12),
    xm: FontValue(13),
    m: FontValue(14),
    lx: FontValue(15),
    l: FontValue(16),
    xl: FontValue(18),
    xxl: FontValue(20),
    xxxl: FontValue(24),
    title: FontValue(28),
    count: FontValue(60),
  },
};
