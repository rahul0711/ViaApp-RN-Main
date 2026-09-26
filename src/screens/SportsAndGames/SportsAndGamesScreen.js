import React, {useState} from 'react';
import {SafeAreaView, FlatList, View, Text, RefreshControl} from 'react-native';
import {Header} from '../../components/Header';
import {rootStyles} from '../../styles/rootStyle';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {GetSportsGamesAction} from '../../redux/actions/GetSports&GamesAction';
import {SporteSkeleton} from '../../components/Skeleton';
import Emptymessages from '../../components/Emptymessages';

const SportsAndGamesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const sportsGamesState = useSelector(
    state =>
      state?.sportsGamesReducer?.sportsGames?.GetAllSportGameDetailResult,
  );
  const fetchSportsGames = () => dispatch(GetSportsGamesAction());

  const fetching = useSelector(state => state.sportsGamesReducer.loading);

  useEffect(() => {
    fetchSportsGames();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchSportsGames()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const sportsGamesList = isSearch ? results : sportsGamesState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(sportsGamesState);
      return;
    }
    if (text.trim().length) {
      const newData = sportsGamesState?.filter(item =>
        item.GameName.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(sportsGamesState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.listView}>
        <View style={styles.nameView}>
          <Text style={styles.listName}>{item.GameName}</Text>
          <Text style={styles.listSubName}>{item.Description}</Text>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceText}> {item.Amount} /</Text>
          <Text style={styles.priceText}>{item.unit}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title={'Sports & Games'}
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {sportsGamesList?.length === 0 ? (
        <Emptymessages />
      ) : (
        <View>
          {fetching ? (
            <SporteSkeleton />
          ) : (
            <>
              <FlatList
                data={sportsGamesList}
                renderItem={renderItem}
                keyExtractor={item => item.SportId}
                contentContainerStyle={{paddingBottom: s(20)}}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              />
            </>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default SportsAndGamesScreen;
