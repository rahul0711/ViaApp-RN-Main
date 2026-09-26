import {
  Text,
  SafeAreaView,
  Image,
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
import {GetEmergencyContactsAction} from '../../redux/actions/GetEmergencyContactsAction';
import {images} from '../../assets/images';
import NumberModal from '../../components/NumberModal';
import {CardSkeleton} from '../../components/Skeleton';
import ComfirmModal from '../../components/ComfirmModal';
import Emptymessages from '../../components/Emptymessages';
import {vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

const EmergencyContact = () => {
  const [numberModal, setNumberModel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [emergencyContact, setEmergencyContact] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [numberType, setNumberType] = useState('');

  const dispatch = useDispatch();

  const emergencyContactsState = useSelector(
    state =>
      state?.emergencyContactsReducer?.emergencyContacts
        ?.GetAllEmergencyContactPersonDetialsResult,
  );
  const fetchEmergencyContact = () => dispatch(GetEmergencyContactsAction());

  const fetching = useSelector(state => state.emergencyContactsReducer.loading);

  useEffect(() => {
    fetchEmergencyContact();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchEmergencyContact()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const emergencyContactsStateList = isSearch
    ? results
    : emergencyContactsState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(emergencyContactsState);
      return;
    }
    if (text.trim().length) {
      const newData = emergencyContactsState?.filter(item =>
        item.Name.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(emergencyContactsState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title={'Emergency Contact'}
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {emergencyContactsStateList?.length === 0 ? (
        <Emptymessages />
      ) : (
        <ScrollView
          style={{marginVertical: vs(10)}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {fetching ? (
            <CardSkeleton />
          ) : (
            <>
              {emergencyContactsStateList?.map(item => {
                return (
                  <View style={rootStyles.mH15} key={item.EmergencyContactId}>
                    <View style={styles.listView}>
                      <View style={styles.contactView}>
                        <Text style={styles.listTitle}>{item.Name}</Text>
                      </View>
                      <View style={rootStyles.mH15}>
                        {item.ContactNo1?.length ? (
                          <View style={[rootStyles.flexRow, {marginTop: vs(5)}]}>
                            <View
                              style={[
                                rootStyles.iconView,
                                {backgroundColor: Colors.phone},
                              ]}>
                              <Image
                                source={images.mobile}
                                style={rootStyles.icon}
                              />
                            </View>
                            <TouchableOpacity
                              onPress={() => {
                                setModalVisible(true);
                                setEmergencyContact(item);
                                setNumberType('mobileNumber');
                              }}>
                              <Text style={styles.contact}>
                                {item.ContactNo1}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ) : null}
                        {item.ContactNo2?.length ? (
                          <View style={[rootStyles.flexRow, {marginTop: vs(5)}]}>
                            <View
                              style={[
                                rootStyles.iconView,
                                {backgroundColor: Colors.phone},
                              ]}>
                              <Image
                                source={images.mobile}
                                style={rootStyles.icon}
                              />
                            </View>
                            <TouchableOpacity
                              onPress={() => {
                                setModalVisible(true);
                                setEmergencyContact(item);
                                setNumberType('officeNumber');
                              }}>
                              <Text style={styles.contact}>
                                {item.ContactNo2}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ) : null}
                        {item.ContactNo3?.length ? (
                          <View style={[rootStyles.flexRow, {marginTop: vs(5)}]}>
                            <View
                              style={[
                                rootStyles.iconView,
                                {backgroundColor: Colors.phone},
                              ]}>
                              <Image
                                source={images.mobile}
                                style={rootStyles.icon}
                              />
                            </View>
                            <TouchableOpacity
                              onPress={() => {
                                setModalVisible(true);
                                setEmergencyContact(item);
                                setNumberType('RpNumber');
                              }}>
                              <Text style={styles.contact}>
                                {item.ContactNo3}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ) : null}
                      </View>
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
          numberModal={numberModal}
          setNumberModel={setNumberModel}
          mobileNumber={emergencyContact.ContactNo1}
          officeNumber={emergencyContact.ContactNo2}
          RpNumber={emergencyContact.ContactNo3}
          setModalVisible={setModalVisible}
          type={numberType}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default EmergencyContact;
