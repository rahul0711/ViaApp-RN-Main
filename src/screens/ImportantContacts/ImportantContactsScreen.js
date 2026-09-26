import {Text, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {rootStyles} from '../../styles/rootStyle';
import {TitleHeader} from '../../components/Header';
import {ImportantContactData} from '../../components/Data';
import {styles} from './styles';
import {images} from '../../assets/images';

const ImportantContactsScreen = ({navigation}) => {
  const handleNavigate = item => {
    if (item.title === 'Department') {
      navigation.navigate('Department');
    } else if (item.title === 'Important Government Officers') {
      navigation.navigate('ImpGovOfficers');
    } else if (item.title === 'Emergency') {
      navigation.navigate('EmergencyContact');
    } else if (item.title === 'Expert Panel') {
      navigation.navigate('ExpertPanel');
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.listView}
        onPress={() => {
          handleNavigate(item);
        }}>
        <Text style={styles.listTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={rootStyles.container}>
      <TitleHeader
        title={'Important Contacts'}
        source={images.back}
        onPress={() => navigation.goBack()}
        logoImg={images.vialogo}
      />
      <FlatList
        data={ImportantContactData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={[
          {justifyContent: 'space-between'},
          rootStyles.mH15,
        ]}
      />
    </SafeAreaView>
  );
};

export default ImportantContactsScreen;
