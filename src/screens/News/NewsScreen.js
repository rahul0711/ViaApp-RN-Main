import React, {useEffect, useState} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  RefreshControl,
  View,
} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {rootStyles} from '../../styles/rootStyle';
import {useDispatch, useSelector} from 'react-redux';
import {GetNewsAction} from '../../redux/actions/GetNewsAction';
import {images} from '../../assets/images';
import {newsImageURL} from '../../utils/constant';
import {NewsSkeleton} from '../../components/Skeleton';
import {SimpleHeader} from '../../components/Header';
import Emptymessages from '../../components/Emptymessages';
import moment from 'moment';

const NewsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const newsState = useSelector(
    state => state?.newsReducer?.news?.GetAllNewsDetailsLatestResult,
  );
  const fetchNews = () => dispatch(GetNewsAction());

  const fetching = useSelector(state => state.newsReducer.loading);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchNews();
    });
    return unsubscribe;
  }, [navigation]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchNews()
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
      setResults(newsState);
      return;
    }
    if (text.trim().length) {
      const newData = newsState?.filter(item =>
        item.NewsTitle.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(newsState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.newsSection}
        onPress={() => navigation.navigate('newsDetails', {id: item.NewsId})}>
        <Image
          style={styles.newsImage}
          source={
            item?.Images?.length > 0
              ? {uri: `${newsImageURL}${item.Images}`}
              : images.eventsImage
          }
        />
        <View>
          <Text numberOfLines={3} style={styles.newsTitle}>
            {item.NewsTitle}
          </Text>
          <Text style={styles.dateTxt}>
            {moment(item.EntryDate).format('DD/MM/YYYY')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const newsList = isSearch ? results : newsState;
  if (refreshing) {
    newsList?.reverse();
  }

  return (
    <SafeAreaView style={rootStyles.container}>
      <SimpleHeader
        title="News"
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {fetching ? (
        <NewsSkeleton />
      ) : (
        <>
          {newsList?.length === 0 ? (
            <Emptymessages />
          ) : (
            <FlatList
              contentContainerStyle={styles.flatListStyle}
              data={newsList?.reverse()}
              renderItem={renderItem}
              keyExtractor={item => item.NewsId}
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

export default NewsScreen;
