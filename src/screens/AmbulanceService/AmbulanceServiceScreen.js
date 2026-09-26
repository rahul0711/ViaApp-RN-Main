import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import {rootStyles} from '../../styles/rootStyle';
import {Service} from '../../components/Data';
import {Header} from '../../components/Header';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';

const AmbulanceService = () => {
  return (
    <SafeAreaView style={rootStyles.container}>
      <Header title={'Ambulance Service'} />
      <ScrollView style={rootStyles.mT}>
        {Service.map((item, index) => {
          return (
            <TouchableOpacity style={styles.listView} key={index}>
              <View style={styles.contactView}>
                <Text style={styles.listTitle}>{item.title}</Text>
              </View>
              <View style={[rootStyles.flexRow, rootStyles.mH15]}>
                <View style={[rootStyles.iconView, rootStyles.margin]}>
                  <FastImage source={item.image} style={rootStyles.icon} />
                </View>
                <Text style={styles.contact}>{item.contact.office}</Text>
              </View>
              <View style={[rootStyles.flexRow, rootStyles.mH15]}>
                <View style={[rootStyles.iconView, rootStyles.margin]}>
                  <FastImage source={item.image} style={rootStyles.icon} />
                </View>
                <Text style={styles.contact}>{item.contact.home}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AmbulanceService;
