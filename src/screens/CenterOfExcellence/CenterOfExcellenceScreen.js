import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TitleHeader} from '../../components/Header';
import {rootStyles} from '../../styles/rootStyle';
import {images} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import { Colors } from '../../styles/colors';

const CenterOfExcellenceScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={rootStyles.container}>
      <TitleHeader
        title="Center of Excellence"
        source={images.back}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.detailSection}>
        <ImageBackground
          source={images.dummyDetailImage}
          style={styles.dummyDetailImg}>
          <LinearGradient
            colors={[Colors.transparent, Colors.black]}
            style={styles.linearGradient}>
            <Text style={styles.detailTitle}>Center Of Excellence</Text>
          </LinearGradient>
        </ImageBackground>
        <View style={[rootStyles.commonPadding, styles.detailView]}>
          <Text style={styles.detailText}>
            "CENTRE OF EXCELLENCE"(CEO), Vapi a Project conceived and set up by
            Vapi Greed Enviro Ltd., under the IIUS Scheme of Govt. of India. At
            COE apart from other facilities, we have the "World Class Analytical
            Laboratory" at GIDC, Vapi. to provide World Class Analytical
            Laboratory, Pilot Plant (R&D Centre) and Convincing Centre to
            Industries at an affordable rates.
          </Text>
          <Text style={styles.detailText}>
            CENTRE OF EXCELLENCE has the capabilities to conduct tests of
            Pharmaceutical & Cosmetic products, Ayurvedic product, Agro and Agro
            Chemical derivatives, Testiles-Dyes and Pigments, Chemical &
            Intermediates, Food Products, Water & Weste Water, Solid-Waste,
            Paper & Packaging Material, Metal analsis, Minerals and Petrleum
            products for physico-chemical parameters. COE has expertise in
            method development and validation as per ICH guideline. We are
            offering the testing service for above all the the products and use
            of our pilot plant/scale up facility and R&D Center to develop the
            product.
          </Text>
          <Text style={styles.detailText}>
            We have already created following facilities at Center of Excellence
            with Financial help from Department of Industrial Policy &
            Promotion, Ministry of Commerce, Govt. og India:
          </Text>
          <Text style={styles.detailText}>
            - Analytical Laboratory - Pilot Plant, scale up and kilo lab
            facility for Chemicals. - Knowledge Resource Center
          </Text>
          <Text style={[styles.detailText, {textDecorationLine: 'underline'}]}>
            THE MAIN OBJECTIVES OF COE IS:
          </Text>
          <Text style={styles.detailText}>
            - To provide world class testing facility.
          </Text>
          <Text style={styles.detailText}>
            - To provide world class R&D facility.
          </Text>
          <Text style={styles.detailText}>
            - To provide access to world class technology.
          </Text>
          <Text style={styles.detailText}>
            - To provide support for improvement of productivity.
          </Text>
          <Text style={styles.detailText}>
            - To arrange nacessary training to technical staff of Member
            Industries.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.detailText}>For More Detail: </Text>
            <TouchableOpacity>
              <Text style={styles.detail}>www.coevapi.com</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CenterOfExcellenceScreen;
