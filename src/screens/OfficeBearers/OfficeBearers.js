import React, {useEffect} from 'react';
import {View, ScrollView, SafeAreaView, RefreshControl} from 'react-native';
import {Header} from '../../components/Header';
import {rootStyles} from '../../styles/rootStyle';
import Card from '../../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {GetOfficeBearersAction} from '../../redux/actions/GetOfficeBearersAction';
import {officeBearersImageURL} from '../../utils/constant';
import {CardSkeleton} from '../../components/Skeleton';
import {useState} from 'react';
import {images} from '../../assets/images';
import Emptymessages from '../../components/Emptymessages';

const OfficeBearers = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const officeBearersState = useSelector(
    state =>
      state?.officeBearersReducer?.officeBearers
        ?.GetAllOfficeBearsDetailsResult,
  );
  const fetchOfficeBearers = () => dispatch(GetOfficeBearersAction());

  const fetching = useSelector(state => state.officeBearersReducer.loading);

  useEffect(() => {
    fetchOfficeBearers();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchOfficeBearers()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const officeList = isSearch ? results : officeBearersState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(officeBearersState);
      return;
    }
    if (text.trim().length) {
      const newData = officeBearersState?.filter(item =>
        item.MemberName.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(officeBearersState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title="Office Bearers"
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />

      {fetching ? (
        <CardSkeleton />
      ) : (
        <>
          {officeList?.length === 0 ? (
            <Emptymessages />
          ) : (
            <ScrollView
              style={rootStyles.mT}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              <View style={[rootStyles.commonPadding, rootStyles.bottomStyle]}>
                {officeList?.map(item => {
                  return (
                    <Card
                      key={item.DesignationId}
                      item={item}
                      photo={
                        item?.Photo?.length > 0
                          ? {
                              uri: `${officeBearersImageURL}${item.VIAId}${item.Photo}`,
                            }
                          : images.profile
                      }
                      memberName={item.MemberName}
                      designationName={item.DesignationName}
                      organisationName={item.OrganisationName}
                      emailId={item.EmailId}
                      mobileNo={item.MobileNo}
                      phoneNo={item.PhoneNo}
                    />
                  );
                })}
              </View>
            </ScrollView>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default OfficeBearers;
