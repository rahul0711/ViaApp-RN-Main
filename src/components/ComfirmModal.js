import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {images} from '../assets/images';
import {ms, s, vs} from 'react-native-size-matters';
import {Fonts} from '../styles/fonts';
import {rootStyles} from '../styles/rootStyle';
import { Colors } from '../styles/colors';

const ComfirmModal = ({
  setModalVisible,
  mobileNumber,
  officeNumber,
  RpNumber,
  type,
  number,
}) => {
  const Number =
    type === 'mobileNumber'
      ? mobileNumber
      : type === 'officeNumber'
      ? officeNumber
      : type === 'RpNumber'
      ? RpNumber
      : type === number
      ? '02602430950'
      : '';
  const handleCall = () => {
    Linking.openURL(`tel:${Number}`);
  };
  return (
    <TouchableOpacity
      style={styles.centeredView}
      onPress={() => setModalVisible(false)}>
      <View style={styles.modalView}>
        <View style={[rootStyles.flexRow, {alignItems: 'center' }]}>
          <Image source={images.mobile} style={styles.icon} />
          <Text style={styles.modalText}>Confirm To call </Text>
        </View>
        <Text style={styles.modalText1}>Are you sure you want to call</Text>
        <View>
          <Text style={styles.numberTextStyle}>{Number}</Text>
        </View>
        <View style={styles.buttonView}>
          <Pressable
            style={styles.cancelbutton}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelTextStyle}>Cancel</Text>
          </Pressable>
          <View style={styles.border} />
          <Pressable style={styles.Callbutton} onPress={handleCall}>
            <Text style={styles.textStyle}>Call</Text>
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ComfirmModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      Platform.OS === 'ios' ? Colors.blackTransparent : Colors.blackLightTransparent,
  },
  icon: {
    width: ms(23),
    height: ms(23),
    resizeMode: 'contain',
    tintColor: Colors.black,
  },
  modalView: {
    width: Dimensions.get('window').width / 1.2,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: ms(15),
  },
  cancelbutton: {
    marginVertical: vs(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Email,    
    width: 70,
    height: 35,
    borderRadius: 10
  },
  Callbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.phone,
    width: 70,
    height: 35,
    borderRadius: 10
  },
  textStyle: {
    fontSize: Fonts.size.lx,
    fontFamily: Fonts.family.PoppinsSemiBold,
    color: Colors.white,
  },
  numberTextStyle: {
    marginBottom: s(10),
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsSemiBold,
    color: Colors.black,
  },
  cancelTextStyle: {
    fontSize: Fonts.size.lx,
    fontFamily: Fonts.family.PoppinsRegular,
    color: Colors.white,
  },
  modalText: {
    fontSize: Fonts.size.lx,
    textAlign: 'center',
    fontFamily: Fonts.family.PoppinsSemiBold,
    color: Colors.black,
    marginLeft: s(15),
  },
  modalText1: {
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsRegular,
    color: Colors.black,
    marginTop: s(10),
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: vs(20),
  },
  border: {
    fontSize: Fonts.size.xl,
    width: 2,
    height: vs(25),
    backgroundColor: Colors.PrimaryColor,
    marginHorizontal: s(15),
  },
});
