import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import {rootStyles} from '../../styles/rootStyle';
import {TitleHeader} from '../../components/Header';
import {VgelData} from '../../components/Data';
import {styles} from './styles';
import {images} from '../../assets/images/index';
import FastImage from 'react-native-fast-image';

const VgelDashboardScreen = ({navigation}) => {
  const handleNavigate = item => {
    if (item.title === 'Center of Excellence (COE)') {
      navigation.navigate('COE');
    } else if (item.title === 'Common Effluence treatment plat') {
      navigation.navigate('CETP');
    } else if (item.title === 'Director Of VGEL') {
      navigation.navigate('DirectorVGEL');
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
        title={'VGEL Dashboard'}
        source={images.back}
        onPress={() => navigation.goBack()}
      />
      <Image source={images.vgelLogo} style={styles.vgelLogo} />
      <FastImage source={images.vgelPhoto} style={styles.vgelPhoto} />
      <FlatList
        data={VgelData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
      />
      <TouchableOpacity
        onPress={() => Linking.openURL('http://www.vgelvapi.com/')}>
        <Text style={styles.bottomLink}>http://www.vgelvapi.com/</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VgelDashboardScreen;
