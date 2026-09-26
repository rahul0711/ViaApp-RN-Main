import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {images} from '../../assets/images';
import Video from 'react-native-video';
import {rootStyles} from '../../styles/rootStyle';

const OnbordingScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.videoView} />
      <Video
        repeat={true}
        source={images.VideoURL}
        style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
        resizeMode="cover"
      />
      <View style={styles.viaLogoView}>
        <Image source={images.ViaLogoName} style={styles.viaLogoImg} />
      </View>
      <View style={styles.submitView}>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={rootStyles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnbordingScreen;
