import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {rootStyles} from '../../styles/rootStyle';
import {Header} from '../../components/Header';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {GetDepartmentAction} from '../../redux/actions/GetDepartmentAction';
import FastImage from 'react-native-fast-image';
import {DepartmentSkeleton} from '../../components/Skeleton';
import {useNavigation} from '@react-navigation/native';
import Emptymessages from '../../components/Emptymessages';
import {departmentIcon} from '../../utils/constant';

const DepartmentScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const departmentState = useSelector(
    state =>
      state?.departmentReducer?.department
        ?.GetAllImpContactDepartmentMasterDetailsResult,
  );
  const fetchDepartment = () => dispatch(GetDepartmentAction());

  const fetching = useSelector(state => state.departmentReducer.loading);

  useEffect(() => {
    fetchDepartment();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchDepartment()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const departmentList = isSearch ? results : departmentState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(departmentState);
      return;
    }
    if (text.trim().length) {
      const newData = departmentState?.filter(item =>
        item.DepartmentName.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(departmentState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.listView}
        onPress={() => {
          navigation.navigate('DepartmentDetails', {
            id: item?.item?.DepartmentId,
            item: item
          });
        }}>
        <FastImage
          source={{
            uri: `${departmentIcon}${item.item.DepartmentName}${'.png'}`,
          }}
          style={styles.listIcon}
        />
        <Text style={styles.listTitle}>{item?.item?.DepartmentName}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title={'Department'}
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {departmentList?.length === 0 ? (
        <Emptymessages />
      ) : (
        <View>
          {fetching ? (
            <DepartmentSkeleton />
          ) : (
            <FlatList
              data={departmentList}
              renderItem={renderItem}
              keyExtractor={item => item.DepartmentId}
              numColumns={3}
              columnWrapperStyle={[
                {justifyContent: 'flex-start'},
                rootStyles.mH15,
              ]}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default DepartmentScreen;
