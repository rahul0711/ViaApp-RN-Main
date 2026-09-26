import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {rootStyles} from '../../styles/rootStyle';
import {Header} from '../../components/Header';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {GetCommitteAction} from '../../redux/actions/GetCommitteAction';
import {CommitteSkeleton} from '../../components/Skeleton';
import {images} from '../../assets/images';
import FastImage from 'react-native-fast-image';
import {committeeIcon} from '../../utils/constant';
import {vs} from 'react-native-size-matters';

const CommitteeScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const committeState = useSelector(
    state => state?.committeReducer?.committe?.GetCommitteeMasterDetailsResult,
  );
  const fetchCommitte = () => dispatch(GetCommitteAction());

  const fetching = useSelector(state => state.committeReducer.loading);

  useEffect(() => {
    fetchCommitte();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchCommitte()
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
      setResults(committeState);
      return;
    }
    if (text.trim().length) {
      const newData = committeState?.filter(item =>
        item.CommitteeName.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(committeState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  const renderItem = ({item}) => {
    const imageURL =
      committeeIcon + encodeURIComponent(item.CommitteeName) + '.png';

    return (
      <TouchableOpacity
        style={styles.listView}
        onPress={() =>
          navigation.navigate('CommitteeDetails', {
            item: item,
          })
        }>
        <View style={rootStyles.spaceBetween}>
          <View style={rootStyles.rowCenter}>
            <FastImage
              style={styles.committeeIcon}
              source={{
                uri: imageURL,
              }}
            />
            <Text style={styles.listTitle}>{item.CommitteeName}</Text>
          </View>
          <FastImage style={styles.rightIcon} source={images.rightBack} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title={'Committee'}
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {fetching ? (
        <CommitteSkeleton />
      ) : (
        <FlatList
          data={isSearch ? results : committeState}
          renderItem={renderItem}
          keyExtractor={item => item.CommitteeId}
          contentContainerStyle={{paddingVertical: vs(20)}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default CommitteeScreen;
