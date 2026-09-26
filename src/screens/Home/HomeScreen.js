import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import {rootStyles} from '../../styles/rootStyle';
import {styles} from './styles';
import {adsData, List} from '../../components/Data';
import {DrawerActions} from '@react-navigation/native';
import {TitleHeader} from '../../components/Header';
import {images} from '../../assets/images/index';
import Carousel from 'react-native-reanimated-carousel';

const width = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  const handleNavigate = item => {
    if (item.title === 'Office Bearers') {
      navigation.navigate('officeBearers');
    } else if (item.title === 'Elected Members') {
      navigation.navigate('ElectedMembers');
    } else if (item.title === 'Committee') {
      navigation.navigate('Committee');
    } else if (item.title === 'Important Contacts') {
      navigation.navigate('ImportantContact');
    } else if (item.title === 'Messages') {
      navigation.navigate('Messages');
    } else if (item.title === 'Past President') {
      navigation.navigate('PastPresident');
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.listView}
        onPress={() => {
          handleNavigate(item);
        }}>
        <View style={styles.center}>
          <View style={rootStyles.mT10}>
            <Image source={item.image} style={styles.listIcon} />
            {item?.number ? (
              <View style={styles.numberView}>
                <Text style={styles.number}>{item?.number}</Text>
              </View>
            ) : null}
          </View>
          <View style={styles.titleView}>
            <Text style={styles.listTitle}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderImage = ({item, index}) => {
    return (
      <View style={rootStyles.flex} key={index}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.imageView}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={rootStyles.container}>
      <TitleHeader
        title={'Welcome to VIA'}
        source={images.menu}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Carousel
        loop
        width={width}
        height={width / 1.7}
        autoPlay={true}
        data={adsData}
        scrollAnimationDuration={1000}
        renderItem={renderImage}
      />
      <FlatList
        columnWrapperStyle={[
          {justifyContent: 'space-between'},
          rootStyles.mH15,
        ]}
        data={List}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
