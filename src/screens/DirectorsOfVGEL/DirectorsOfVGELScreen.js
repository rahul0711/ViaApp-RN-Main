import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Modal,
  TouchableOpacity,
  RefreshControl,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {rootStyles} from '../../styles/rootStyle';
import {Header} from '../../components/Header';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {GetDirectorsOfVgelAction} from '../../redux/actions/GetDirectorsOfVgelAction';
import {images} from '../../assets/images';
import NumberModal from '../../components/NumberModal';
import ComfirmModal from '../../components/ComfirmModal';
import FastImage from 'react-native-fast-image';
import {SporteSkeleton} from '../../components/Skeleton';
import Emptymessages from '../../components/Emptymessages';
import {Colors} from '../../styles/colors';
import { vs } from 'react-native-size-matters';

const DirectorVGEL = () => {
  const [numberModal, setNumberModel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [directorVGEL, setDirectorVGEL] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [numberType, setNumberType] = useState('');

  const dispatch = useDispatch();

  const directorsOfVgelState = useSelector(
    state =>
      state?.directorsOfVgelReducer?.directorsOfVgel
        ?.GetAllDirectorVGELDetailsResult,
  );
  const fetchDirectorsOfVgel = () => dispatch(GetDirectorsOfVgelAction());

  const fetching = useSelector(state => state.directorsOfVgelReducer.loading);

  useEffect(() => {
    fetchDirectorsOfVgel();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchDirectorsOfVgel()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const directorsOfVgelList = isSearch ? results : directorsOfVgelState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(directorsOfVgelState);
      return;
    }
    if (text.trim().length) {
      const newData = directorsOfVgelState?.filter(item =>
        item.Name.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(directorsOfVgelState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  return (
    <SafeAreaView style={rootStyles.container}>
      <Header
        title={'Directors Of VGEL'}
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />
      {directorsOfVgelList?.length === 0 ? (
        <Emptymessages />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {fetching ? (
            <SporteSkeleton />
          ) : (
            <>
              {directorsOfVgelList?.map(item => {
                const Number = item?.ContactNo?.split('/');
                const Email = item?.Emailid?.split(',');
                return (
                  <View style={rootStyles.mH15} key={item.DirectorVGELId}>
                    <View style={styles.listView}>
                      <View style={styles.contactView}>
                        <Text style={styles.listTitle}>{item.Name}</Text>
                      </View>
                      <View
                        style={[
                          rootStyles.mH15,
                          rootStyles.mV10,
                        ]}>
                        {item?.ContactNo?.length > 0 ? (
                          <View style={[rootStyles.flexRow]}>
                            <View
                              style={[
                                rootStyles.iconView,
                                {backgroundColor: Colors.phone},
                              ]}>
                              <FastImage
                                source={images.mobile}
                                style={rootStyles.icon}
                              />
                            </View>
                            {Number.map(value => {
                              return (
                                <TouchableOpacity
                                  onPress={() => {
                                    setModalVisible(true);
                                    setDirectorVGEL(value);
                                    setNumberType('mobileNumber');
                                  }}>
                                  <Text style={styles.contact}>{value}</Text>
                                </TouchableOpacity>
                              );
                            })}
                          </View>
                        ) : null}
                        {item.ContactNo1?.length > 0 ? (
                          <>
                            {mobileNo.map(value => {
                              return (
                                <TouchableOpacity
                                  onPress={() => {
                                    setModalVisible(true);
                                    setDirectorVGEL(value);
                                    setNumberType('officeNumber');
                                  }}>
                                  <Text
                                    style={[styles.contact, ]}>
                                    {value}
                                  </Text>
                                </TouchableOpacity>
                              );
                            })}
                          </>
                        ) : null}
                        <View style={[rootStyles.flexRow, {marginTop: vs(5)}]}>
                          <View
                            style={[
                              rootStyles.iconView,
                              {backgroundColor: Colors.Email},
                            ]}>
                            <FastImage
                              source={images.email}
                              style={rootStyles.icon}
                            />
                          </View>
                          <View>
                            {Email.map(value => {
                              return (
                                <TouchableOpacity
                                  onPress={() =>
                                    Linking.openURL(`mailto:${value}`)
                                  }>
                                  <Text
                                    style={[
                                      styles.contact,
                                      {textDecorationLine: 'underline'},
                                    ]}>
                                    {value}
                                  </Text>
                                </TouchableOpacity>
                              );
                            })}
                          </View>
                        </View>
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
          mobileNumber={directorVGEL || ''}
          officeNumber={directorVGEL || ''}
          setModalVisible={setModalVisible}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default DirectorVGEL;
