import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {s, vs} from 'react-native-size-matters';
import {Fonts} from '../styles/fonts';
import { Colors } from '../styles/colors';

const Emptymessages = () => {
  return (
    <View style={styles.cart}>
      <Text style={styles.title}>No Data Found</Text>
      <Text style={styles.Discription}>
        Try searching for a different keywork {'\n'} or tweek your search a
        little
      </Text>
    </View>
  );
};

export default Emptymessages;

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    height: vs(110),
    width: s(120),
    resizeMode: 'stretch',
  },
  title: {
    color: Colors.darkGrey,
    fontFamily: Fonts.family.PoppinsMedium,
    fontSize: Fonts.size.l,
  },
  Discription: {
    color: Colors.placeHolderColor,
    fontFamily: Fonts.family.PoppinsRegular,
    fontSize: Fonts.size.xm,
    textAlign: 'center',
  },
});
