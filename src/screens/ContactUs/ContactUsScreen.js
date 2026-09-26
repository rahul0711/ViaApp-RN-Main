import {
  View,
  Text,
  SafeAreaView,
  Image,
  Modal,
  Linking,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {TitleHeader} from '../../components/Header';
import {styles} from './styles';
import {rootStyles} from '../../styles/rootStyle';
import {images} from '../../assets/images';
import {ms, s, vs} from 'react-native-size-matters';
import ComfirmModal from '../../components/ComfirmModal';
import FastImage from 'react-native-fast-image';
import {Colors} from '../../styles/colors';

const ContactUs = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={rootStyles.container}>
      <View style={rootStyles.container}>
        <TitleHeader
          title={'Contact Us'}
          source={images.back}
          onPress={() => navigation.goBack()}
        />
        <ImageBackground
          source={images.ViaContact}
          style={styles.imageBackground}>
          <View
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              flex: 1,
              backgroundColor: Colors.blackTransparent,
            }}>
            <View style={[rootStyles.mH15, rootStyles.mT10]}>
              <View style={[rootStyles.flexRow, {alignItems: 'center'}]}>
                <View
                  style={[
                    rootStyles.iconView,
                    {margin: ms(10), backgroundColor: Colors.phone},
                  ]}>
                  <FastImage source={images.mobile} style={rootStyles.icon} />
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text style={styles.contact}>0260-2430950</Text>
                </TouchableOpacity>
              </View>
              <View style={[rootStyles.flexRow, {alignItems: 'center'}]}>
                <View
                  style={[
                    rootStyles.iconView,
                    {margin: ms(10), backgroundColor: Colors.Email},
                  ]}>
                  <FastImage source={images.email} style={rootStyles.icon} />
                </View>
                <TouchableOpacity
                  onPress={() => Linking.openURL('mailto:info@viavapi.org')}>
                  <Text style={styles.contact}>info@viavapi.org</Text>
                </TouchableOpacity>
              </View>
              <View style={rootStyles.flexRow}>
                <View style={[rootStyles.iconView, {margin: ms(10)}]}>
                  <FastImage source={images.location} style={rootStyles.icon} />
                </View>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      'https://www.google.com/maps/place/Vapi+Industries+Association/@20.3640779,72.9208489,17z/data=!4m6!3m5!1s0x3be0ce5c00000001:0xfe83cb1c45718921!8m2!3d20.3638566!4d72.9233058!16s%2Fg%2F11fst0_1nb?entry=ttu',
                    )
                  }>
                  <Text style={styles.contact}>
                    VIA House Plot no 135, NH8, GIDC, Vapi 396195 Gujarat
                  </Text>
                </TouchableOpacity>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}>
                <ComfirmModal setModalVisible={setModalVisible} />
              </Modal>
            </View>
            <View
              style={[rootStyles.mH15, rootStyles.flexRow, rootStyles.mT10]}>
              <View
                style={[
                  rootStyles.iconView,
                  {marginHorizontal: s(10), backgroundColor: Colors.black},
                ]}>
                <Image source={images.twitter} style={styles.icon} />
              </View>
              <View style={[rootStyles.iconView, {marginHorizontal: s(10)}]}>
                <Image source={images.facebook} style={styles.icon} />
              </View>
            </View>
            {/* <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/place/Vapi+Industries+Association/@20.3640779,72.9208489,17z/data=!4m6!3m5!1s0x3be0ce5c00000001:0xfe83cb1c45718921!8m2!3d20.3638566!4d72.9233058!16s%2Fg%2F11fst0_1nb?entry=ttu',
              )
            }>
            <FastImage
              source={images.map}
              style={{
                width: '100%',
                height: Dimensions.get('screen').height / 1.6,
                marginTop: '40%',
              }}
              resizeMode="cover"
            />
          </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default ContactUs;
