import {StyleSheet, Platform} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import {Colors} from '../styles/colors';

export const styles = StyleSheet.create({
  loaderView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const eventsSkeletonStyle = StyleSheet.create({
  eventImageBG: {
    width: s(150),
    height: Platform.OS === 'ios' ? vs(140) : vs(163),
    borderRadius: 10,
    marginHorizontal: s(10),
    marginVertical: vs(10),
  },
  flatListStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export const newsSkeletonStyle = StyleSheet.create({
  newsSection: {
    marginVertical: vs(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: s(15),
    width: '100%',
  },
  newsImage: {
    borderRadius: 12,
    width: ms(90),
    height: ms(90),
  },
  newsTitle: {
    marginLeft: s(10),
    height: ms(90),
    width: s(230),
  },
});

export const meetingSkeletonStyle = StyleSheet.create({
  meetingSection: {
    marginVertical: vs(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  meetingImage: {
    borderRadius: 12,
    width: s(318),
    height: vs(170),
  },
  meetingTitle: {
    width: s(318),
    height: vs(50),
    marginVertical: vs(10),
    borderRadius: 12,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.dividerColor,
  },
});

export const messageSkeletonStyle = StyleSheet.create({
  msgSection: {
    marginVertical: vs(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    marginTop: vs(10),
    width: '100%',
    height: 2,
    backgroundColor: Colors.dividerColor,
  },
});

export const cardSkeletonStyle = StyleSheet.create({
  mainBox: {
    marginVertical: vs(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  containBox: {
    borderRadius: 12,
    width: s(318),
    height: vs(200),
  },
  designationHolderImg: {height: ms(100), width: ms(100)},
});

export const committeSkeletonStyle = StyleSheet.create({
  mainBox: {
    marginVertical: vs(10),
    marginHorizontal: s(15),
  },
  listView: {
    height: vs(50),
    borderRadius: 10,
  },
});

export const departmentSkeletonStyle = StyleSheet.create({
  mainDepartmentBox: {
    marginVertical: vs(10),
    marginHorizontal: s(15),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  departmentListView: {
    height: ms(100),
    width: ms(100),
    borderRadius: 10,
  },
});

export const sporteSkeletonStyle = StyleSheet.create({
  sporteSection: {
    marginVertical: vs(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: s(10),
    width: '100%',
    borderRadius: 10,
  },
  sporteTitle: {
    marginLeft: s(10),
    height: vs(100),
    width: '90%',
  },
});
