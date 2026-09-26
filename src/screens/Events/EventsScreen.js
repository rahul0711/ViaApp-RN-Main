import React, {useEffect, useState} from 'react';
import {
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import {style} from './styles';
import {useNavigation} from '@react-navigation/native';
import {SimpleHeader} from '../../components/Header';
import {rootStyles} from '../../styles/rootStyle';
import {useDispatch, useSelector} from 'react-redux';
import {GetEventsAction} from '../../redux/actions/GetEventsAction';
import {eventImageURL} from '../../utils/constant';
import {images} from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import {EventsSkeleton} from '../../components/Skeleton';
import Emptymessages from '../../components/Emptymessages';
import {Colors} from '../../styles/colors';
import moment from 'moment';

const EventsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const eventsState = useSelector(
    state => state?.eventsReducer?.events?.GetAllEventDetailsLatestResult,
  );
  const fetchEvents = () => dispatch(GetEventsAction());

  const fetching = useSelector(state => state.eventsReducer.loading);

  const onRefresh = () => {
    setRefreshing(true);
    fetchEvents()
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
      setResults(eventsState);
      return;
    }
    if (text.trim().length) {
      const newData = eventsState?.filter(item =>
        item.EventTitle.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(eventsState);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchEvents();
    });
    return unsubscribe;
  }, [navigation]);

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('eventDetails', {id: item.EventId});
        }}>
        <ImageBackground
          imageStyle={{borderRadius: 10}}
          style={style.eventImageBG}
          source={
            item?.Images?.length > 0
              ? {uri: `${eventImageURL}${item.Images}`}
              : images.eventsImage
          }>
          <Text style={style.dateTxt}>
            {moment(item.EntryDate).format('DD/MM/YYYY')}
          </Text>
          <LinearGradient
            colors={[Colors.transparent, Colors.black]}
            style={style.linearGradient}>
            <Text style={style.eventTitle} numberOfLines={3}>
              {item.EventTitle}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const eventList = isSearch ? results : eventsState;
  if (refreshing) {
    eventList?.reverse();
  }

  return (
    <SafeAreaView style={rootStyles.container}>
      <SimpleHeader
        title="Events"
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {fetching ? (
        <EventsSkeleton />
      ) : (
        <>
          {eventList?.length === 0 ? (
            <Emptymessages />
          ) : (
            <FlatList
              contentContainerStyle={style.flatListStyle}
              numColumns={2}
              data={eventList?.reverse()}
              renderItem={renderItem}
              keyExtractor={item => item.EventId}
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

export default EventsScreen;
