import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import {images} from '../../assets/images/index';
import {Header} from '../../components/Header';
import {rootStyles} from '../../styles/rootStyle';
import {useDispatch, useSelector} from 'react-redux';
import {GetPastPresidentAction} from '../../redux/actions/GetPastPresidentsAction';
import ComfirmModal from '../../components/ComfirmModal';
import {pastPresidentImageURL} from '../../utils/constant';
import FastImage from 'react-native-fast-image';
import {CardSkeleton} from '../../components/Skeleton';
import Emptymessages from '../../components/Emptymessages';

const PastPresidentScreen = () => {
  const [numberModal, setNumberModel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [presidentData, setPresidentData] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [numberType, setNumberType] = useState('');

  const dispatch = useDispatch();

  const pastPresidentsState = useSelector(
    state =>
      state?.pastPresidentsReducer?.pastPresidents
        ?.GetAllPastPresidentDetailsResult,
  );

  const fetchPastPresidents = () => dispatch(GetPastPresidentAction());

  const fetching = useSelector(state => state.pastPresidentsReducer.loading);

  useEffect(() => {
    fetchPastPresidents();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchPastPresidents()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const pastPresidentsList = isSearch ? results : pastPresidentsState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(pastPresidentsState);
      return;
    }
    if (text.trim().length) {
      const newData = pastPresidentsState?.filter(item =>
        item.PersonName.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(pastPresidentsState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title="Past Presidents"
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {pastPresidentsList?.length === 0 ? (
        <Emptymessages />
      ) : (
        <ScrollView
          style={rootStyles.mT10}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={[rootStyles.commonPadding, rootStyles.bottomStyle]}>
            {fetching ? (
              <CardSkeleton />
            ) : (
              <>
                {pastPresidentsList?.reverse().map(item => {
                  return (
                    <View style={rootStyles.mainBox} key={item.PastPresidentId}>
                      <View style={rootStyles.containBox}>
                        <FastImage
                          style={rootStyles.designationHolderImg}
                          source={
                            item?.Photo?.length > 0
                              ? {
                                  uri: `${pastPresidentImageURL}${item.PastPresidentId}${item.Photo}`,
                                }
                              : images.cardProfileImg
                          }
                        />
                        <View>
                          <Text style={rootStyles.designationHolder}>
                            {item.PersonName}
                          </Text>
                          <View
                            style={[rootStyles.flexRow, {alignSelf: 'center'}]}>
                            <Text style={rootStyles.designation}>
                              [ {item.StartPeriod}-
                            </Text>
                            <Text style={rootStyles.designation}>
                              {item.EndPeriod} ]
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </>
            )}
          </View>
        </ScrollView>
      )}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ComfirmModal
          type={numberType}
          numberModal={numberModal}
          setNumberModel={setNumberModel}
          mobileNumber={presidentData.OffPhoneNo1}
          officeNumber={presidentData.OffPhoneNo2}
          RpNumber={presidentData.RPhoneNo1}
          setModalVisible={setModalVisible}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default PastPresidentScreen;
