import {View} from 'react-native';
import React, {useEffect} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {rootStyles} from '../../styles/rootStyle';
import {FullScreenLoader} from '../../components/LoaderScreen';
import {readData} from '../../utils/Storage';
import {checkPermission} from '../../utils/firebase';

export const AuthScreen = () => {
  const navigation = useNavigation();
  const checkStatus = async () => {
    const isLogin = await readData('TOKEN');
    if (isLogin) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'FounderDesk'}],
        }),
      );
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Onbording'}],
        }),
      );
    }
  };
  useEffect(() => {
    checkPermission();
    checkStatus();
  }, []);

  return (
    <View style={[rootStyles.container, rootStyles.justifyCenter]}>
      <FullScreenLoader />
    </View>
  );
};
