import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { styles } from './style';
import { rootStyles } from '../../styles/rootStyle';
import { images } from '../../assets/images';
import { FullScreenLoader } from '../../components/LoaderScreen';
import { otpVerify } from '../../redux/actions/Registration';
import { showMessage } from 'react-native-flash-message';
import { Colors } from '../../styles/colors';
import { saveData } from '../../utils/Storage';
import { CommonActions } from '@react-navigation/native';

const CELL_COUNT = 4;

const OtpScreen = ({ navigation, name, number }) => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const msg = {
    type: 'info',
    backgroundColor: Colors.errorColor,
  };

  const handleVerify = async () => {
    setIsLoading(true);
    if (!value) {
      showMessage({ ...msg, message: 'Please Enter Valid Otp' });
      setIsLoading(false);
      return;
    }

    const response = await otpVerify({
      VerifiedAppUser: {
        Name: name,
        MobileNo: number,
        OTPCode: value,
        GCMRegistrationId: '',
      },
    });

    if (response) {
      await saveData('TOKEN', '1');
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'FounderDesk' }],
        })
      );
    }

    setIsLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 20}
      >
        <View style={[rootStyles.flex, { justifyContent: 'space-between', paddingBottom: 20 }]}>
          <View>
            <Image source={images.vialogo} style={styles.logo} />
            <Text style={styles.menuTitle}>Enter OTP</Text>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={{ width: 300, justifyContent: 'space-between' }}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <View
                    key={index}
                    style={[styles.otpTextInput, isFocused && styles.focusStyle]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    <Text style={styles.otpChar}>
                      {symbol || (isFocused ? <Cursor /> : '')}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View style={[styles.submitView, {marginTop: 30}]}>
            <TouchableOpacity
              style={styles.buttonView}
              onPress={handleVerify}
              disabled={isLoading}
            >
              {isLoading ? (
                <FullScreenLoader />
              ) : (
                <Text style={rootStyles.buttonText}>SUBMIT</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpScreen;
