import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Modal,
  TouchableOpacity,
  RefreshControl,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {rootStyles} from '../../styles/rootStyle';
import {Header} from '../../components/Header';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {GetIndustrialAction} from '../../redux/actions/GetIndustrailAction';
import {images} from '../../assets/images';
import ComfirmModal from '../../components/ComfirmModal';
import FastImage from 'react-native-fast-image';
import {CardSkeleton} from '../../components/Skeleton';
import Emptymessages from '../../components/Emptymessages';
import {Colors} from '../../styles/colors';

const SurroundingIndustrial = () => {
  const [numberModal, setNumberModel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [surroundingIndustrial, setSurroundingIndustrial] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [numberType, setNumberType] = useState('');

  const dispatch = useDispatch();

  const industrialState = useSelector(
    state =>
      state?.industrialReducer?.industrial
        ?.GetAllIndustrialAssociatationDetailDetialsResult,
  );

  const fetchIndustrial = () => dispatch(GetIndustrialAction());

  const fetching = useSelector(state => state.industrialReducer.loading);

  useEffect(() => {
    fetchIndustrial();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchIndustrial()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const industrialList = isSearch ? results : industrialState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(industrialState);
      return;
    }
    if (text.trim().length) {
      const newData = industrialState?.filter(item =>
        item.AssociateName.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(industrialState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title={'Surrounding Associations'}
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {industrialList?.length === 0 ? (
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
              {industrialList?.map((item, index) => {
                return (
                  <View style={[styles.listView, rootStyles.mH15]} key={index}>
                    <View style={styles.contactView}>
                      <Text style={styles.listTitle}>{item.AssociateName}</Text>
                    </View>
                    <View
                      style={[
                        rootStyles.mH15,
                        rootStyles.mT10,
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
                              setSurroundingIndustrial(item);
                              setNumberType('mobileNumber');
                            }}
                            style={rootStyles.flexcl}>
                            <Text style={styles.contact}>
                              {item.ContactNo1}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : null}

                      {item.ContactNo3?.length ? (
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
                              setSurroundingIndustrial(item);
                              setNumberType('RpNumber');
                            }}
                            style={[rootStyles.flexcl]}>
                            <Text style={styles.contact}>
                              {item.ContactNo3}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                      <View style={[rootStyles.flexRow]}>
                        <View
                          style={[
                            rootStyles.iconView,
                            rootStyles.margin,
                            {backgroundColor: Colors.Email},
                          ]}>
                          <FastImage
                            source={images.email}
                            style={rootStyles.icon}
                          />
                        </View>
                        <Text style={styles.contact}>{item.PersonName}</Text>
                      </View>
                      <View style={[rootStyles.flexRow]}>
                        <View style={[rootStyles.iconView, rootStyles.margin]}>
                          <FastImage
                            source={images.location}
                            style={rootStyles.icon}
                          />
                        </View>
                        <Text style={styles.contact}>{item.Address}</Text>
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
          type={numberType}
          numberModal={numberModal}
          setNumberModel={setNumberModel}
          mobileNumber={surroundingIndustrial.ContactNo1}
          RpNumber={surroundingIndustrial.ContactNo3}
          setModalVisible={setModalVisible}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default SurroundingIndustrial;
