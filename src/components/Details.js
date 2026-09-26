import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import {images} from '../assets/images';
import {Fonts} from '../styles/fonts';
import {rootStyles} from '../styles/rootStyle';
import {TitleHeader} from './Header';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import { color } from 'react-native-reanimated';

const Details = ({
  headerTitle,
  source,
  eventTitle,
  eventDetails,
  EntryDate,
}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={rootStyles.container}>
      <TitleHeader
        title={headerTitle}
        source={images.back}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.detailSection}>
        <ImageBackground source={source} style={styles.dummyDetailImg}>
           <View style={styles.linearGradient}>
            <Text style={styles.dateTxt}>{EntryDate}</Text>
           </View> 
        </ImageBackground>
        <View style={[rootStyles.commonPadding, styles.detailView]}>
          <Text style={styles.detailTitle}>{eventTitle}</Text>
          <Text style={styles.detailText}>{eventDetails}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Details;
export const styles = StyleSheet.create({
  dummyDetailImg: {
    width: '100%',
    height: vs(250),
    justifyContent: 'flex-end',
  },
  detailSection: {
    marginTop: s(10),
  },
  detailTitle: {
    fontFamily: Fonts.family.PoppinsSemiBold,
    color: Colors.PrimaryColor,
    fontSize: Fonts.size.lx,
  },
  detailText: {
    fontFamily: Fonts.family.PoppinsRegular,
    fontSize: Fonts.size.m,
    paddingBottom: vs(20),
    color: Colors.darkPrimaryColor,
  },
  detailView: {
    marginTop: vs(10),
  },
  linearGradient: {
    width: s(80),
    height: vs(20),
    borderRadius: 5,
    marginVertical: vs(10),
    marginHorizontal: s(16),
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Colors.lightBlack,
    // backgroundColor: Colors.blackLightTransparent,
  },
  dateTxt: {
    color: Colors.white,
    fontSize: Fonts.size.s,
    fontFamily: Fonts.family.PoppinsSemiBold,
  },
});
