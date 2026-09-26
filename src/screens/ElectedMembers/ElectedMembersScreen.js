import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import { Header } from '../../components/Header';
import { rootStyles } from '../../styles/rootStyle';
import Card from '../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { GetElectedMembersAction } from '../../redux/actions/GetElectedMembersAction';
import { officeBearersImageURL } from '../../utils/constant';
import { images } from '../../assets/images';
import { CardSkeleton } from '../../components/Skeleton';
import Emptymessages from '../../components/Emptymessages';
import { GetCommitteDetailsAction } from '../../redux/actions/GetCommitteDetailAction';

const ElectedMembers = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [committeelist, setCommitteelist] = useState([]);

  const electedMembersState = useSelector(
    state =>
      state?.electedMembersReducer?.electedMembers
        ?.GetAllElectedMembersDetailsResult,
  );
  const commiteDetailState = useSelector(
    state =>
      state?.committeDetailReducer?.committeDetails
        ?.GetAllCommitteeWiseVIAMembersDetailsResult,
  );

  const fetchCommiteDetails = id => dispatch(GetCommitteDetailsAction(id));
  const fetchElectedMembers = () => dispatch(GetElectedMembersAction());

  const fetching = useSelector(state => state.electedMembersReducer.loading);

  useEffect(() => {
    fetchElectedMembers();
    fetchCommiteDetails('61')
  }, []);

  useEffect(() => {
    if (electedMembersState && commiteDetailState) {
      setCommitteelist([...electedMembersState, ...commiteDetailState]);
    }
  }, [commiteDetailState, electedMembersState]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchElectedMembers()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const electedMembersList = isSearch ? results : committeelist;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(committeelist);
      return;
    }
    if (text.trim().length) {
      const newData = committeelist?.filter(item =>
        item.MemberName.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(committeelist);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title="Elected Members"
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {fetching ? (
        <CardSkeleton />
      ) : (
        <>
          {electedMembersList?.length === 0 ? (
            <Emptymessages />
          ) : (
            <ScrollView
              style={rootStyles.mT}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              <View style={[rootStyles.commonPadding, rootStyles.bottomStyle]}>
                {electedMembersList?.map(item => (
                  <Card
                    key={item.DesignationId}
                    item={item}
                    photo={
                      item?.Photo?.length > 0
                        ? {
                          uri: `${officeBearersImageURL}${item.VIAId}${item.Photo}`,
                        }
                        : images.cardProfileImg
                    }
                    memberName={item.MemberName}
                    designationName={item.DesignationName}
                    organisationName={item.OrganisationName}
                    emailId={item.EmailId}
                    mobileNo={item.MobileNo}
                    phoneNo={item.PhoneNo}
                  />
                ))}
              </View>
            </ScrollView>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default ElectedMembers;
