import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {styles} from './styles';
import {Header} from '../../components/Header';
import {rootStyles} from '../../styles/rootStyle';
import {useDispatch, useSelector} from 'react-redux';
import {GetMessagesAction} from '../../redux/actions/GetMassegsAction';
import {MessageSkeleton} from '../../components/Skeleton';
import Emptymessages from '../../components/Emptymessages';
import moment from 'moment';
import Collapsible from 'react-native-collapsible';

export const RenderMessage = ({item}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <View style={rootStyles.mH15} key={item.MessageId}>
      <View style={styles.msgSection}>
        <View>
          <Text style={styles.date}>
            {moment(item.EntryDate).format('DD/MM/YYYY')}
          </Text>
        </View>
        <TouchableOpacity style={styles.titleView} onPress={toggleAccordion}>
          {!isCollapsed ? null : <Text style={styles.textStyle} numberOfLines={3}>
            {item.MessageDetails}
          </Text>}
          <Collapsible collapsed={isCollapsed}>
            {item?.MessageDetails?.length > 0 && (
              <View>
                <Text style={styles.textStyle}>{item.MessageDetails}</Text>
              </View>
            )}
          </Collapsible>
          <TouchableOpacity activeOpacity={1} onPress={toggleAccordion}>
            <Text allowFontScaling={false} style={styles.lessTextStyle}>
              {!isCollapsed ? 'Show Less' : 'Show More'}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const Messages = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const MessagesState = useSelector(
    state => state?.MessagesReducer?.Messages?.GetMessageDetailsResult,
  );
  const fetchMessages = () => dispatch(GetMessagesAction());

  const fetching = useSelector(state => state.MessagesReducer.loading);

  const messageList = isSearch ? results : MessagesState;

  useEffect(() => {
    fetchMessages();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchMessages()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(MessagesState);
      return;
    }
    if (text.trim().length) {
      const newData = MessagesState?.filter(item =>
        item.MessageTitle.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(MessagesState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };
  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title={'Messages'}
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />

      {fetching ? (
        <MessageSkeleton />
      ) : (
        <>
          {messageList?.length === 0 ? (
            <Emptymessages />
          ) : (
            <ScrollView
              style={rootStyles.mT}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              {messageList?.map(item => {
                return <RenderMessage item={item} />;
              })}
            </ScrollView>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default Messages;
