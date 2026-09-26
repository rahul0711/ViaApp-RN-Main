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

const CetpScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={rootStyles.container}>
      <TitleHeader
        title={"Common Effluence Treatment"}
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
            <Text style={styles.detailTitle}>Common Effluence treatment</Text>
          </LinearGradient>
        </ImageBackground>
        <View style={[rootStyles.commonPadding, styles.detailView]}>
          <Text style={styles.detailText}>
            Vapi GIDC Estate is "Declared Chemical Estate" housing over 1400
            Industries, two third of which are chemical related units. Almost
            80% of the rapid industrializations was the goal and the national
            and state economic policy was to encourage SSI sector and many basic
            provisions so essential for and Industrial estate of this kind were
            left unattended. No provision for the management of Industrial
            estate ware made. As A result of this, by the time the menace of
            Environmental Pollution came under focus and stringent Pollutoon
            Control acts came into existence, the issue had become complicated.
            The SSI sector was simply not having adequate technical, financial
            or human Resources to comply with stringent standards required.
          </Text>
          <Text style={{textDecorationLine: 'underline'}}>
            Mission & Vision
          </Text>
          <Text style={styles.detailText}>Mission</Text>
          <Text style={styles.detailText}>
            • Our Mission is to lead the industry in creating value for
            ourselves and our customers through dedication on standards,
            quality, productivity and and customer satisfaction.
          </Text>
          <Text style={styles.detailText}>
            • At TCC, We have always focued particular attention to meeting our
            customer's needs, by controlling the purchasing and production
            processes and assuring continued adherence to safety standards and
            Environmental protection rules.
          </Text>
          <Text style={styles.detailText}>Mission</Text>
          <Text style={styles.detailText}>
            Our corporate vision is to embrace a new paradigm of technological
            advancement that enable us:
          </Text>
          <Text style={styles.detailText}>
            • To identify potential customers and their requirements.
          </Text>
          <Text style={styles.detailText}>
            • To provide premium customer service across the globe.
          </Text>
          <Text style={styles.detailText}>• To assess customer values.</Text>
          <Text style={styles.detailText}>
            • To offer a wide range of products and services to our existing and
            future customers through an open door policy.
          </Text>
          <Text style={styles.detailText}>
            We are very much comfortable in setting the corporate objectives and
            achieving the targets.
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

export default CetpScreen;
