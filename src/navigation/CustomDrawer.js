import React from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {vs} from 'react-native-size-matters';
import {images} from '../assets/images/index';
import DrawerItem from '../components/DrawerItem';
import {styles} from './styles';
import {CommonActions, DrawerActions} from '@react-navigation/native';
import {removeItem} from '../utils/Storage';
import {Colors} from '../styles/colors';

const CustomDrawer = ({navigation}) => {
  const handleChangeLogout = async () => {
    await removeItem('TOKEN');
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Registration'}],
      }),
    );
  };
  return (
    <ScrollView
      style={styles.drawerContainer}
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{paddingBottom: vs(20), width: 500}}>
      <SafeAreaView />
      {/* <TouchableOpacity
        style={styles.closeIconeView}
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer());
        }}>
        <Image
          source={images.close}
          style={[styles.closeIcone, {tintColor: Colors.white}]}
        />
      </TouchableOpacity> */}
      <View style={styles.logoView}>
        <Image source={images.ViaLogoName} style={styles.logo} />
      </View>
      <DrawerItem
        title={'Office Bearers'}
        source={images.officeBearers}
        onPress={() => {
          navigation.navigate('officeBearers');
        }}
      />
      <DrawerItem
        title={'Elected Members'}
        source={images.electedMembers}
        onPress={() => {
          navigation.navigate('ElectedMembers');
        }}
      />
      <DrawerItem
        title={'Invitee Members'}
        source={images.inviteeMembers}
        onPress={() => {
          navigation.navigate('InviteMembers');
        }}
      />
      <DrawerItem
        title={'Committee'}
        source={images.committee}
        onPress={() => {
          navigation.navigate('Committee');
        }}
      />
      <DrawerItem
        title={'Past Presidents'}
        source={images.pastPresident}
        onPress={() => navigation.navigate('PastPresident')}
      />
      <DrawerItem
        title={'Important Contacts'}
        source={images.importantContacts}
        onPress={() => navigation.navigate('ImportantContact')}
      />
      <DrawerItem
        title={'VGEL'}
        source={images.vgel}
        onPress={() => navigation.navigate('VgelDashboard')}
      />
      <DrawerItem
        title={'COE'}
        source={images.coeIcon}
        onPress={() => navigation.navigate('CeoDashboard')}
      />
      <DrawerItem
        title={'Surrounding Associations'}
        source={images.industrial}
        onPress={() => navigation.navigate('SurroundingIndustrial')}
      />
      <DrawerItem
        title={'Contact Us'}
        source={images.contact}
        onPress={() => navigation.navigate('ContactUs')}
      />
      <View style={{marginTop: vs(20)}}>
        <DrawerItem
          title={'Log Out'}
          source={images.logout}
          onPress={handleChangeLogout}
        />
      </View>
    </ScrollView>
  );
};
export default CustomDrawer;
