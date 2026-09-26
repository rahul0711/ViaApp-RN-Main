import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {rootStyles} from '../../styles/rootStyle';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {GetMessagesDetailsAction} from '../../redux/actions/GetMessageDetailAction';
import {BackHeader, TitleHeader} from '../../components/Header';
import { images } from '../../assets/images';

const MessageDetail = ({navigation, route}) => {
  const dispatch = useDispatch();

  const MessagesDetailState = useSelector(
    state =>
      state?.MessagesDetailsReducer?.MessagesDetails
        ?.GetAllIDWiseMessageDetailsResult,
  );
  const fetchMessagesDetails = id => dispatch(GetMessagesDetailsAction(id));

  useEffect(() => {
    fetchMessagesDetails(route.params.id);
  }, []);
  return (
    <SafeAreaView style={rootStyles.container}>
      <TitleHeader
      onPress={() => navigation.goBack()}
      title='Message Details'
      source={images.back}
      />
      <ScrollView>
        {MessagesDetailState?.map(item => {
          return (
            <View style={rootStyles.mH15} key={item.MessageId}>
              <View>
                <Text style={styles.text}>{item.MessageDetails}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessageDetail;
