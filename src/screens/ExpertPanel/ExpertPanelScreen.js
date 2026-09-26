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
import {GetExpertPanelAction} from '../../redux/actions/GetExpertPanelAction';
import {images} from '../../assets/images';
import ComfirmModal from '../../components/ComfirmModal';
import FastImage from 'react-native-fast-image';
import {CardSkeleton} from '../../components/Skeleton';
import Emptymessages from '../../components/Emptymessages';
import {Colors} from '../../styles/colors';
import { vs } from 'react-native-size-matters';

const ExpertPanel = () => {
  const [numberModal, setNumberModel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [expertPanel, setExpertPanel] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [numberType, setNumberType] = useState('');

  const dispatch = useDispatch();

  const expertPanelState = useSelector(
    state =>
      state?.expertPanelReducer?.expertPanel
        ?.GetExpertContactNumberDetailResult,
  );
  const fetchExpertPanel = () => dispatch(GetExpertPanelAction());

  const fetching = useSelector(state => state.expertPanelReducer.loading);

  useEffect(() => {
    fetchExpertPanel();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchExpertPanel()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const expertPanelList = isSearch ? results : expertPanelState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(expertPanelState);
      return;
    }
    if (text.trim().length) {
      const newData = expertPanelState?.filter(item =>
        item.CompanyName.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(expertPanelState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title={'Expert Panel'}
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {expertPanelList?.length === 0 ? (
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
              {expertPanelList?.map(item => {
                // console.log('Loading', item);
                return (
                  <View style={rootStyles.mH15} key={item.ExpertContactId}>
                    <View style={styles.listView}>
                      <View style={styles.contactView}>
                        <Text style={styles.listTitle}>{item.CompanyName}</Text>
                      </View>
                      <Text style={styles.name}>{item.ContactPerson}</Text>
                      {item.ContactNo1?.length ? (
                        <View style={[rootStyles.flexRow,]}>
                          <View
                            style={[
                              rootStyles.iconView,
                              rootStyles.mHL,
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
                              setExpertPanel(item);
                              setNumberType('mobileNumber');
                            }}>
                            <Text style={styles.contact}>
                              {item.ContactNo1}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                      {item.ContactNo2?.length ? (
                        <View style={[rootStyles.flexRow, {marginVertical: vs(5)},]}>
                          <View
                            style={[
                              rootStyles.iconView,
                              rootStyles.mHL,
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
                              setExpertPanel(item);
                              setNumberType('RpNumber');
                            }}>
                            <Text style={styles.contact}>
                              {item.ContactNo2}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                      {item.ContactNo3?.length ? (
                        <View style={rootStyles.flexRow}>
                          <View
                            style={[
                              rootStyles.iconView,
                              rootStyles.mHL,
                              ,
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
                              setExpertPanel(item);
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
          mobileNumber={expertPanel.ContactNo1}
          RpNumber={expertPanel.ContactNo2}
          setModalVisible={setModalVisible}
          type={numberType}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default ExpertPanel;
