import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {s, vs} from 'react-native-size-matters';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  meetingSection: {
    paddingHorizontal: s(19),
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListRenderItem: {
    marginVertical: vs(8),
  },
  meetingImage: {
    borderRadius: 12,
    width: s(318),
    height: vs(170),
  },
  flatListStyle: {
    paddingBottom: vs(20),
  },
  newsTitle: {
    color: Colors.black,
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsRegular,
    marginVertical: vs(12),
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.dividerColor,
  },
});
