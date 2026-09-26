import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import {Colors} from '../styles/colors';

export const FullScreenLoader = () => {
  return (
    <View
      style={[
        styles.loaderView,
        {backgroundColor: Colors.lightWhite},
      ]}>
      <ActivityIndicator color={Colors.white} size="small" />
    </View>
  );
};
