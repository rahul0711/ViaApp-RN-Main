import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './styles';
import {rootStyles} from '../../styles/rootStyle';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {images} from '../../assets/images/index';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {GetWelcomeMessageAction} from '../../redux/actions/GetWelcomeMessageAction';
import {presidentImageURL} from '../../utils/constant';
import {FullScreenLoader} from '../../components/LoaderScreen';

const FounderDeskScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const messageState = useSelector(
    state => state?.welcomeMessageReducer?.messages?.GetWelcomeMessageResult,
  );
  const loading = useSelector(state => state?.welcomeMessageReducer?.loading);
  const fetchMessages = () => dispatch(GetWelcomeMessageAction());

  useEffect(() => {
    fetchMessages();
  }, []);
  return loading ? (
    <FullScreenLoader />
  ) : (
    <>
      <ScrollView
        style={rootStyles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <SafeAreaView />
        <Image source={images.vialogo} style={styles.vialogoImg} />
        <Text style={styles.header}>Presidents Message</Text>
        {messageState?.map((item, index) => {
          return (
            <View key={index}>
              <View style={styles.profileImgView}>
                <FastImage
                  resizeMode="contain"
                  style={styles.profileImage}
                  source={
                    item?.Photo?.length > 0
                      ? {
                          uri: `${presidentImageURL}`,
                        }
                      : images.cardProfileImg
                  }
                />
              </View>
              <Text style={styles.profileName}>{item.Name}</Text>
              <Text style={styles.profileOccupation}>{item.Designation}</Text>
              <View style={rootStyles.mH15}>
                <Text style={styles.content}>{item.Message}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'Drawer' },
                
              ],
            })
          );
        }}>
        <Text style={rootStyles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </>
  );
};

export default FounderDeskScreen;
