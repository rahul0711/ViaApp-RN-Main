import React from 'react';
import {Text, Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import {Colors} from '../styles/colors';
import {styles} from './styles';
import {images} from '../assets/images/index';
import EventsScreen from '../screens/Events/EventsScreen';
import NewsScreen from '../screens/News/NewsScreen';
import MeetingsScreen from '../screens/Meetings/MeetingsScreen';
import { rootStyles } from '../styles/rootStyle';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const TextComponent = ({focused, label}) => {
    return (
      <Text
        style={[
          styles.tabLabel,
          {
            color: focused ? Colors.PrimaryColor : Colors.darkPrimaryColor,
          },
        ]}>
        {label}
      </Text>
    );
  };
  const ImageComponent = ({focused, source}) => {
    return (
      <Image
        source={source}
        style={{
          tintColor: focused ? Colors.PrimaryColor : Colors.darkPrimaryColor,
        }}
      />
    );
  };
  return (
    <View style={rootStyles.container}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TextComponent focused={focused} label={'Home'} />
          ),
          tabBarIcon: ({focused}) => (
            <ImageComponent source={images.home} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TextComponent focused={focused} label={'Events'} />
          ),
          tabBarIcon: ({focused}) => (
            <View>
              <View style={styles.numberView}>
                <Text style={styles.number}>2</Text>
              </View>
              <ImageComponent source={images.events} focused={focused} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TextComponent focused={focused} label={'News'} />
          ),
          tabBarIcon: ({focused}) => (
            <ImageComponent source={images.news} focused={focused} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Meeting"
        component={MeetingsScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TextComponent focused={focused} label={'Meeting'} />
          ),
          tabBarIcon: ({focused}) => (
            <ImageComponent source={images.meeting} focused={focused} />
          ),
        }}
      /> */}
    </Tab.Navigator>
    <View style={styles.bottomLine}>
      <Text style={styles.bottomTxt}>Developed By Softyug</Text>
    </View>
    </View>
  );
};
export default TabNavigator;
