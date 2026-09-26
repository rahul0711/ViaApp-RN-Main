import React, {useEffect, useState} from 'react';
import {View, ScrollView, SafeAreaView, RefreshControl} from 'react-native';
import {Header} from '../../components/Header';
import {rootStyles} from '../../styles/rootStyle';
import Card from '../../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {GetInviteMembersAction} from '../../redux/actions/GetInviteMembersAction';
import {officeBearersImageURL} from '../../utils/constant';
import {images} from '../../assets/images';
import {CardSkeleton} from '../../components/Skeleton';
import Emptymessages from '../../components/Emptymessages';

const InviteMembers = ({numberType}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const inviteMembersState = useSelector(
    state =>
      state?.inviteMembersReducer?.inviteMembers
        ?.GetAllInviteeMemberDetailsResult,
  );
  const fetchInvitedMembers = () => dispatch(GetInviteMembersAction());

  const fetching = useSelector(state => state.inviteMembersReducer.loading);

  useEffect(() => {
    fetchInvitedMembers();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchInvitedMembers()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const inviteMemberList = isSearch ? results : inviteMembersState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(inviteMembersState);
      return;
    }
    if (text.trim().length) {
      const newData = inviteMembersState?.filter(item =>
        item.MemberName.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(inviteMembersState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title="Invitee Members"
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {fetching ? (
        <CardSkeleton />
      ) : (
        <>
          {inviteMemberList?.length === 0 ? (
            <Emptymessages />
          ) : (
            <ScrollView
              style={rootStyles.mT}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              <View style={[rootStyles.commonPadding, rootStyles.bottomStyle]}>
                {inviteMemberList?.map(item => {
                  return (
                    <Card
                      type={numberType}
                      key={item.VIAId}
                      item={item}
                      photo={
                        item?.Photo?.length > 0
                          ? {
                              uri: `${officeBearersImageURL}${item.VIAId}${item.Photo}`,
                            }
                          : images.profileIcon
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

export default InviteMembers;
