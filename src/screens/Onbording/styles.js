import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';
import {Fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  submitView: {
    position: 'absolute',
    bottom: vs(20),
    left: s(20),
    right: s(20),
  },
  buttonView: {
    height: ms(50),
    width: '100%',
    backgroundColor: Colors.PrimaryColor,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    elevation: 20,
    zIndex: 9999899,
    marginBottom: vs(16),
  },
  viaLogoImg: {
    height: ms(250),
    width: ms(250),
    resizeMode: 'contain',
  },
  viaLogoView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    // zIndex: 9999899,
  },
  videoView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: Colors.lightWhite,
  },
});
