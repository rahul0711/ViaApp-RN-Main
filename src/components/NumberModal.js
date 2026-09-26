import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {rootStyles} from '../styles/rootStyle';

const NumberModal = ({
  numberModal,
  setNumberModel,
  mobileNumber,
  officeNumber,
  RpNumber,
  setModalVisible,
  type,
}) => {
  const handleCallModal = () => {
    setNumberModel(false);
    setModalVisible(true);
  };
  return (
    <TouchableOpacity
      onPress={() => setNumberModel(!numberModal)}
      style={rootStyles.modalClose}>
      <View style={rootStyles.numberModal}>
        <Text style={rootStyles.modelTitle}>Chooes Phone Number</Text>
        <TouchableOpacity onPress={handleCallModal}>
          {type === 'Number' ? (
            <View>
              <Text style={rootStyles.numbersInModal}>{mobileNumber}</Text>
              <Text style={rootStyles.numbersInModal}>{officeNumber}</Text>
            </View>
          ) : (
            <Text style={rootStyles.numbersInModal}>{RpNumber}</Text>
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export default NumberModal;
