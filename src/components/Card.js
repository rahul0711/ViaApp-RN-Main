import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import { images } from '../assets/images';
import { rootStyles } from '../styles/rootStyle';
import ComfirmModal from './ComfirmModal';
import FastImage from 'react-native-fast-image';
import { Colors } from '../styles/colors';
import { styles } from './styles';

const Card = ({
  item,
  photo,
  memberName,
  designationName,
  organisationName,
  emailId,
  mobileNo,
}) => {
  const [numberModal, setNumberModel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [numberType, setNumberType] = useState('');
  const [cardDetails, setCardDetails] = useState();
  const PNumber = item.PhoneNo.split(',');
  const MNumber = item.MobileNo.split(',');

  return (
    <View style={rootStyles.mainBox}>
      <View style={rootStyles.containBox}>
        <FastImage
          resizeMode={'contain'}
          style={rootStyles.designationHolderImg}
          source={photo}
          defaultSource={images.profileIcon}
        />
        <View>
          <Text style={rootStyles.designationHolder}>{memberName}</Text>
          <Text style={rootStyles.designation}>{designationName}</Text>
        </View>
        <View style={rootStyles.flexRow}>
          <View style={[rootStyles.flexRow, rootStyles.iconView]}>
            <FastImage style={rootStyles.icon} source={images.businessBag} />
          </View>
          <Text style={rootStyles.organisation}>{organisationName}</Text>
        </View>

        {mobileNo?.length ? (
          <>
            <View style={rootStyles.iconFlex}>
              <View
                style={[
                  rootStyles.flexRow,
                  rootStyles.iconView,
                  { backgroundColor: Colors.phone },
                ]}>
                <FastImage style={rootStyles.icon} source={images.mobile} />
              </View>
              {PNumber.map(value => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                      setCardDetails(value);
                      setNumberType('RpNumber');
                    }}>
                    <Text style={rootStyles.iconValue}>(O) : {value}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={rootStyles.iconFlex}>
              <View
                style={[
                  rootStyles.flexRow,
                  rootStyles.iconView,
                  { backgroundColor: Colors.phone },
                ]}>
                <FastImage style={rootStyles.icon} source={images.mobile} />
              </View>
              {MNumber.map(value => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                      setCardDetails(value);
                      setNumberType('mobileNumber');
                    }}>
                    <Text style={rootStyles.iconValue}>(M) : {value}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        ) : null}
        <TouchableOpacity style={rootStyles.iconFlex}>
          <View
            style={[
              rootStyles.flexRow,
              rootStyles.iconView,
              { backgroundColor: Colors.Email },
            ]}>
            <FastImage style={rootStyles.icon} source={images.email} />
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL(`mailto:${emailId}`)}>
            <Text style={rootStyles.emailText}>{emailId}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <ComfirmModal
            type={numberType}
            numberModal={numberModal}
            setNumberModel={setNumberModel}
            mobileNumber={cardDetails || ''}
            RpNumber={cardDetails || ''}
            setModalVisible={setModalVisible}
          />
        </Modal>
      </View>
    </View>
  );
};
export default Card;
