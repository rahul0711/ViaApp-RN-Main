import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TitleHeader} from '../../components/Header';
import {styles} from './styles';
import {rootStyles} from '../../styles/rootStyle';
import {useSelector} from 'react-redux';
import {CreateFeedBack} from '../../redux/actions/CreateFeedbackAction';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {Colors} from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../assets/images';
import {FullScreenLoader} from '../../components/LoaderScreen';

const Feedback = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [cname, setCName] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleAllFeedback = useSelector(
    state => state.createFeedbackReducer.FeedbackData,
  );

  useEffect(() => {
    if (handleAllFeedback?.length > 0) {
      let newArr = handleAllFeedback.map(value => {
        return {
          label: value?.name,
          value: value?.id,
        };
      });
      setFeedback(newArr);
    }
  }, [handleAllFeedback]);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const hendleFeedback = async () => {
    let msg = {
      type: 'info',
      backgroundColor: Colors.errorColor,
    };
    if (!name) {
      showMessage({
        message: 'Please Enter Name',
        ...msg,
      });
      return;
    }
    if (number.length != 10) {
      showMessage({
        message: 'Enter Valid Mobile Number',
        ...msg,
      });
      return;
    }
    if (!regex.test(email)) {
      showMessage({
        message: 'Please Enter Email',
        ...msg,
      });
      return;
    }
    if (!cname) {
      showMessage({
        message: 'Please Enter Company Name',
        ...msg,
      });
      return;
    }
    if (!message) {
      showMessage({
        message: 'Please Enter Message',
        ...msg,
      });
      return;
    }
    const feedbackBody = {
      FeedBack: {
        Name: name,
        MobileNo: number,
        Email: email,
        CompanyName: cname,
        Messege: message,
      },
    };
    setIsLoading(true);
    const response = await CreateFeedBack(feedbackBody);
    setIsLoading(false);
    if (response) {
      Alert.alert('Success', 'Feedback Are success', [
        {text: 'OK', onPress: () => navigation.navigate('Drawer')},
      ]);
    } else {
      Alert.alert('Erorr', 'Try Again', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <KeyboardAvoidingView style={rootStyles.flex} behavior="height">
        <TitleHeader
          title={'Feedback'}
          source={images.back}
          onPress={() => navigation.goBack()}
        />
        <ScrollView style={rootStyles.mT}>
          <View style={rootStyles.mH15}>
            <View>
              <Text style={styles.contact}>Full Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                keyboardType="name-phone-pad"
                placeholder="Enter Your Name"
                placeholderTextColor={Colors.placeHolderTxtColor}
              />
            </View>
            <View>
              <Text style={styles.contact}>Mobile Number</Text>
              <TextInput
                style={styles.input}
                onChangeText={setNumber}
                value={number}
                maxLength={10}
                keyboardType="phone-pad"
                placeholder="Enter Your Mobile Number "
                placeholderTextColor={Colors.placeHolderTxtColor}
              />
            </View>
            <View>
              <Text style={styles.contact}>Email id</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                keyboardType="email-address"
                placeholder="Enter your Email ID"
                placeholderTextColor={Colors.placeHolderTxtColor}
              />
            </View>
            <View>
              <Text style={styles.contact}>Company Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={setCName}
                value={cname}
                keyboardType="name-phone-pad"
                placeholder="Enter your Company Name"
                placeholderTextColor={Colors.placeHolderTxtColor}
              />
            </View>
            <View>
              <Text style={styles.contact}>Message</Text>
              <TextInput
                multiline={true}
                textAlignVertical="top"
                style={[styles.input, {height: 160, paddingTop: 15}]}
                onChangeText={setMessage}
                value={message}
                placeholder="Enter your Message"
                keyboardType="name-phone-pad"
                placeholderTextColor={Colors.placeHolderTxtColor}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.buttonView}
                onPress={hendleFeedback}>
                {isLoading ? (
                  <FullScreenLoader />
                ) : (
                  <Text style={rootStyles.buttonText}>SUBMIT</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

export default Feedback;
