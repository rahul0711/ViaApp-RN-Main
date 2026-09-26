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
import {images} from '../../assets/images';
import {CardSkeleton} from '../../components/Skeleton';
import ComfirmModal from '../../components/ComfirmModal';
import {GetDepartmentDetailAction} from '../../redux/actions/GetDepartmentDetailAction';
import Emptymessages from '../../components/Emptymessages';
import {s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';

const DepartmentDetails = ({route}) => {
  const [numberModal, setNumberModel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [departmentDetail, setDepartmentDetail] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [numberType, setNumberType] = useState('');

  const dispatch = useDispatch();

  const departmentDetailsState = useSelector(
    state =>
      state?.departmentDetailsReducer?.departmentDetail
        ?.GetAllDepartmentWiseImpContactNumberDetailResult,
  );

  const fetchDepartmentDetails = id => dispatch(GetDepartmentDetailAction(id));

  const fetching = useSelector(state => state.departmentDetailsReducer.loading);

  useEffect(() => {
    fetchDepartmentDetails(route.params.id);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchDepartmentDetails()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  };

  const departmentDetailList = isSearch ? results : departmentDetailsState;

  const searchFilterFunction = text => {
    setIsSearch(true);
    setSearch(text);
    if (!text.trim().length > 0) {
      setResults(departmentDetailsState);
      return;
    }
    if (text.trim().length) {
      const newData = departmentDetailsState?.filter(item =>
        item.AreaName.toLowerCase().match(text.toLowerCase()),
      );
      setResults(newData);
    } else {
      setResults(departmentDetailsState);
    }
  };

  const handleOnClearSearch = () => {
    setIsSearch(false);
    setSearch('');
  };

  return (
    <>
      <SafeAreaView style={rootStyles.container}>
        <Header
          title={route?.params?.item?.item?.DepartmentName}
          search={search}
          setSearch={setSearch}
          searchFilterFunction={searchFilterFunction}
          onClearSearch={handleOnClearSearch}
        />
        {departmentDetailList?.length === 0 ? (
          <Emptymessages />
        ) : (
          <ScrollView
            style={{marginVertical: vs(5)}}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {fetching ? (
              <CardSkeleton />
            ) : (
              <>
                {departmentDetailList?.map(item => {
                  return (
                    <View style={rootStyles.mH15} key={item.AreaId}>
                      <View style={styles.detailView}>
                        <View style={styles.contactView}>
                          <Text style={styles.detailTitle}>
                            {item.AreaName}
                          </Text>
                        </View>
                        <View style={rootStyles.mH15}>
                          {item.ContactNo1?.length ? (
                            <View style={[rootStyles.flexRow, {marginTop: s(5)}]}>
                              <View
                                style={[
                                  rootStyles.iconView,
                                  rootStyles.margin,
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
                                  setDepartmentDetail(item);
                                  setNumberType('mobileNumber');
                                }}>
                                <Text style={styles.contact}>
                                  {item.ContactNo1}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          ) : null}
                          {item.ContactNo2?.length ? (
                            <View style={rootStyles.flexRow}>
                              <View
                                style={[
                                  rootStyles.iconView,
                                  rootStyles.margin,
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
                                  setDepartmentDetail(item);
                                  setNumberType('officeNumber');
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
                                  rootStyles.margin,
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
                                  setDepartmentDetail(item);
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
            mobileNumber={departmentDetail.ContactNo1}
            officeNumber={departmentDetail.ContactNo2}
            RpNumber={departmentDetail.ContactNo3}
            setModalVisible={setModalVisible}
            type={numberType}
          />
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default DepartmentDetails;
