import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {rootStyles} from '../../styles/rootStyle';
import {Registration, GetOtpAction} from '../../redux/actions/Registration';
import {Colors} from '../../styles/colors';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {FullScreenLoader} from '../../components/LoaderScreen';
import OtpScreen from '../Otp/OtpScreen';
import {images} from '../../assets/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const RegistrationScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const msg = {
    type: 'info',
    backgroundColor: Colors.errorColor,
  };

  const handleLogin = async () => {
    if (!name?.length && !number?.length) {
      showMessage({
        ...msg,
        message: 'Please Enter Your Name and Mobile Number',
      });
      return;
    }
    if (!name?.length) {
      showMessage({
        ...msg,
        message: 'Please Enter Your Name',
      });
      return;
    }
    if (!number?.length) {
      showMessage({...msg, message: 'Please Enter Your Mobile Number'});
      return;
    }
    if (number?.length !== 10) {
      showMessage({...msg, message: 'Please Enter Valid Mobile Number'});
      return;
    }
    setIsLoading(true);

    const response = await Registration({
      MobileAppRegistration: {
        Name: name,
        MobileNumber: number,
        GCMRegistrationId: '',
      },
    });

    if (response) {
      const res = await GetOtpAction(number);
      console.log('getotp====>', res);
      if (res) {
      setShow(true);
      }
    }

    setIsLoading(false);
  };

  const linkTxt = ({children}) => (
    <TouchableOpacity
      onPress={() => Linking.openURL('https://viavapi.org/PrivacyPolicy.aspx')}>
      <Text style={styles.linkTxt}>{children}</Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAwareScrollView
      bounces={false}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid
      extraScrollHeight={Platform.OS === 'android' ? 120 : 100}
      contentContainerStyle={rootStyles.flex}>
      {show ? (
        <OtpScreen name={name} number={number} navigation={navigation} />
      ) : (
        <View style={rootStyles.flex}>
          <View style={rootStyles.mT10}>
            <Text style={styles.menuTitle}>Registration</Text>
          </View>
          <Image source={images.vialogo} style={styles.logo} />
          <View style={rootStyles.mH15}>
            <View style={{marginTop: 10}}>
              <Text style={styles.contact}>Full Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                autoCorrect={false}
                placeholder="Enter Your Name"
                placeholderTextColor="#A7BABA"
              />
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={styles.contact}>Mobile Number</Text>
              <TextInput
                style={styles.input}
                onChangeText={setNumber}
                value={number}
                maxLength={10}
                autoCorrect={false}
                placeholder="Enter Your Mobile Number"
                keyboardType="number-pad"
                placeholderTextColor="#A7BABA"
              />
            </View>
          </View>
          <View style={[rootStyles.rowCenter, rootStyles.justifyCenter]}>
            <Text style={styles.policyTxt}>By continue, you agree to our </Text>
            <Text>{linkTxt({children: 'Privacy Policy'})}</Text>
          </View>

          <View style={[styles.submitView, {marginTop: 30}]}>
            <TouchableOpacity
              style={styles.buttonView}
              onPress={handleLogin}
              disabled={isLoading}>
              {isLoading ? (
                <FullScreenLoader />
              ) : (
                <Text style={rootStyles.buttonText}>GET OTP</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      )}
      <FlashMessage position="top" />
    </KeyboardAwareScrollView>
  );
};

export default RegistrationScreen;
