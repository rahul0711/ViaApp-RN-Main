import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import CustomDrawer from './CustomDrawer';
import { Dimensions } from 'react-native';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator  
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: Dimensions.get('window').width / 1.25,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Tab" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
