import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import {rootStyles} from '../../styles/rootStyle';
import {Header} from '../../components/Header';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {GetAssetsDetailAction} from '../../redux/actions/GetAssetsDetailAction';
import {CardSkeleton} from '../../components/Skeleton';
import {s} from 'react-native-size-matters';
import Emptymessages from '../../components/Emptymessages';

const AssetsDetail = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const assetsDetailState = useSelector(
    state =>
      state?.assetsDetailReducer?.assetsDetails?.GetAllVIAAssetDetailsResult,
  );
  const fetchAssetsDetail = () => dispatch(GetAssetsDetailAction());

  const fetching = useSelector(state => state.assetsDetailReducer.loading);

  useEffect(() => {
    fetchAssetsDetail();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchAssetsDetail()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const AssetsList = isSearch ? results : assetsDetailState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(assetsDetailState);
      return;
    }
    if (text.trim().length) {
      const newData = assetsDetailState?.filter(item =>
        item.AssetName.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(assetsDetailState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title={'Assets Detail'}
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {AssetsList?.length === 0 ? (
        <Emptymessages />
      ) : (
        <ScrollView
          style={rootStyles.mT}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {fetching ? (
            <CardSkeleton />
          ) : (
            <>
              {AssetsList?.map(item => {
                return (
                  <View style={rootStyles.mH15} key={item.AssetId}>
                    <View style={styles.listView}>
                      <View style={styles.contactView}>
                        <Text style={styles.listTitle}>{item.AssetName}</Text>
                      </View>
                      <View style={rootStyles.spaceBetween}>
                        <Text style={styles.contact}>Charge for Cricket:</Text>
                        <Text style={styles.contact}>{item.CricketCharge}</Text>
                      </View>
                      <View style={rootStyles.spaceBetween}>
                        <Text style={styles.contact}>
                          Charge for Social Function:
                        </Text>
                        <Text style={styles.contact}>
                          {item.SocialFunCharge}
                        </Text>
                      </View>
                      <View style={rootStyles.spaceBetween}>
                        <Text style={styles.contact}>
                          charge for Marriage Fuction:
                        </Text>
                        <Text style={styles.contact}>
                          {item.MarriageCharge}
                        </Text>
                      </View>
                      <View style={rootStyles.spaceBetween}>
                        <Text style={styles.contact}>
                          charge for Commercial Event:
                        </Text>
                        <Text style={styles.contact}>
                          {item.CommercialEventCharge}
                        </Text>
                      </View>
                      <View style={rootStyles.spaceBetween}>
                        <Text style={styles.contact}>Cleaning Charge:</Text>
                        <Text style={styles.contact}>
                          {item.CleaningCharge}
                        </Text>
                      </View>
                      <View style={rootStyles.spaceBetween}>
                        <Text style={styles.contact}>Electricity / Unit:</Text>
                        <Text style={styles.contact}>
                          {item.ElectricityUnit}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default AssetsDetail;
