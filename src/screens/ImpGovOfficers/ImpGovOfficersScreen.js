import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Modal,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {rootStyles} from '../../styles/rootStyle';
import {Header} from '../../components/Header';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {GetGovContactsAction} from '../../redux/actions/GetGovContactsAction';
import {images} from '../../assets/images';
import NumberModal from '../../components/NumberModal';
import ComfirmModal from '../../components/ComfirmModal';
import FastImage from 'react-native-fast-image';
import {SporteSkeleton} from '../../components/Skeleton';
import Emptymessages from '../../components/Emptymessages';
import {Colors} from '../../styles/colors';

const ImpGovOfficers = () => {
  const [numberModal, setNumberModel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [impGovOfficers, setImpGovOfficers] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [numberType, setNumberType] = useState('');

  const dispatch = useDispatch();

  const govContactsState = useSelector(
    state =>
      state?.govContactsReducer?.govContacts
        ?.GetAllImpGoverementContactNoDetialsResult,
  );
  const fetchEvents = () => dispatch(GetGovContactsAction());

  const fetching = useSelector(state => state.govContactsReducer.loading);

  useEffect(() => {
    fetchEvents();
  }, []);

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

  const govContactsStateList = isSearch ? results : govContactsState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(govContactsState);
      return;
    }
    if (text.trim().length) {
      const newData = govContactsState?.filter(item =>
        item.Name.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(govContactsState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title={'Imp Gov. Officers'}
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {govContactsStateList?.length === 0 ? (
        <Emptymessages />
      ) : (
        <ScrollView
          style={rootStyles.mT}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {fetching ? (
            <SporteSkeleton />
          ) : (
            <>
              {govContactsStateList?.map(item => {
                return (
                  <View
                    style={[styles.listView, rootStyles.mH15]}
                    key={item.ImpGoverementId}>
                    <View style={styles.contactView}>
                      <Text style={styles.listTitle}>{item.Name}</Text>
                    </View>
                    <View
                      style={[
                        rootStyles.mV10,
                        rootStyles.mH15,
                        // rootStyles.mB15,
                      ]}>
                      {item.ContactNo1?.length ? (
                        <View style={[rootStyles.flexRow]}>
                          <View
                            style={[
                              rootStyles.iconView,
                              rootStyles.margin,
                              {backgroundColor: Colors.phone},
                            ]}>
                            <FastImage
                              source={images.mobile}
                              style={rootStyles.icon}
                            />
                          </View>
                          <TouchableOpacity
                            onPress={() => {
                              setModalVisible(true);
                              setImpGovOfficers(item);
                              setNumberType('mobileNumber');
                            }}>
                            <Text style={styles.contact}>
                              {item.ContactNo1}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                      {item.ContactNo2?.length ? (
                        <View style={[rootStyles.flexRow]}>
                          <View
                            style={[
                              rootStyles.iconView,
                              rootStyles.margin,
                              {backgroundColor: Colors.phone},
                            ]}>
                            <FastImage
                              source={images.mobile}
                              style={rootStyles.icon}
                            />
                          </View>
                          <TouchableOpacity
                            onPress={() => {
                              setModalVisible(true);
                              setImpGovOfficers(item);
                              setNumberType('RpNumber');
                            }}>
                            <Text style={styles.contact}>
                              {item.ContactNo2}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                    </View>
                  </View>
                );
              })}
            </>
          )}
        </ScrollView>
      )}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ComfirmModal
          type={numberType}
          numberModal={numberModal}
          setNumberModel={setNumberModel}
          mobileNumber={impGovOfficers.ContactNo1}
          RpNumber={impGovOfficers.ContactNo2}
          setModalVisible={setModalVisible}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default ImpGovOfficers;
