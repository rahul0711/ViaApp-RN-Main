/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {SimpleHeader} from '../../components/Header';
import {rootStyles} from '../../styles/rootStyle';
import {useDispatch, useSelector} from 'react-redux';
import {GetMeetingsAction} from '../../redux/actions/GetMeetingsAction';
import {images} from '../../assets/images';
import {meetingsImageURL} from '../../utils/constant';
import {MeetingSkeleton} from '../../components/Skeleton';
import Emptymessages from '../../components/Emptymessages';

const MeetingsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const meetingsState = useSelector(
    state => state?.meetingsReducer?.meetings?.GetAllMeetingDetailsResult,
  );
  const fetchMeeting = () => dispatch(GetMeetingsAction());

  const fetching = useSelector(state => state.meetingsReducer.loading);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchMeeting();
    });
    return unsubscribe;
  }, [navigation]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchMeeting()
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
      setResults(meetingsState);
      return;
    }
    if (text.trim().length) {
      const newData = meetingsState?.filter(item =>
        item.MeetingTitle.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(meetingsState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.flatListRenderItem}>
        <View style={styles.meetingSection}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('meetingDetails', {id: item.MeetingId})
            }>
            <Image
              style={styles.meetingImage}
              source={
                item?.Image?.length > 0
                  ? {uri: `${meetingsImageURL}${item.Image}`}
                  : images.eventsImage
              }
            />
            <Text style={styles.newsTitle}>{item.MeetingTitle}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
      </View>
    );
  };
  const meetingList = isSearch ? results : meetingsState;
  return (
    <SafeAreaView style={rootStyles.container}>
      <SimpleHeader
        title="Meetings"
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {fetching ? (
        <MeetingSkeleton />
      ) : (
        <>
          {meetingList?.length === 0 ? (
            <Emptymessages />
          ) : (
            <FlatList
              contentContainerStyle={styles.flatListStyle}
              data={meetingList}
              renderItem={renderItem}
              keyExtractor={item => item.MeetingId}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default MeetingsScreen;
