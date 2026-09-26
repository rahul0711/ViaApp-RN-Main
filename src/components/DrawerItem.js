import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {Fonts} from '../styles/fonts';
import {Colors} from '../styles/colors';
import {rootStyles} from '../styles/rootStyle';

const DrawerItem = ({title, source, onPress}) => {
  return (
    <TouchableOpacity
      style={[rootStyles.rowCenter, styles.margin]}
      onPress={onPress}>
      <Image source={source} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  margin: {
    marginLeft: s(25),
    marginBottom: vs(20),
  },
  icon: {
    height: ms(22),
    width: ms(22),
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  title: {
    color: Colors.white,
    marginLeft: s(20),
    fontSize: Fonts.size.s,
    fontFamily: Fonts.family.PoppinsSemiBold,
  },
});
