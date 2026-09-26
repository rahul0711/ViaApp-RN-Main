import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {rootStyles} from '../../styles/rootStyle';
import {Header} from '../../components/Header';
import {images} from '../../assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {GetCommitteDetailsAction} from '../../redux/actions/GetCommitteDetailAction';
import {officeBearersImageURL} from '../../utils/constant';
import ComfirmModal from '../../components/ComfirmModal';
import FastImage from 'react-native-fast-image';
import Emptymessages from '../../components/Emptymessages';
import {Colors} from '../../styles/colors';
import {styles} from './styles';
import {s} from 'react-native-size-matters';
import {GetElectedMembersAction} from '../../redux/actions/GetElectedMembersAction';

const CommitteeDetailsScreen = ({route}) => {
  const dispatch = useDispatch();
  const [numberModal, setNumberModel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [committeeDetails, setCommitteeDetails] = useState();
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [numberType, setNumberType] = useState('');
  const [committeelist, setCommitteelist] = useState([]);

  const commiteDetailState = useSelector(
    state =>
      state?.committeDetailReducer?.committeDetails
        ?.GetAllCommitteeWiseVIAMembersDetailsResult,
  );

  const electedMembersState = useSelector(
    state =>
      state?.electedMembersReducer?.electedMembers
        ?.GetAllElectedMembersDetailsResult,
  );

  const fetchCommiteDetails = id => dispatch(GetCommitteDetailsAction(id));
  const fetchElectedMembers = () => dispatch(GetElectedMembersAction());

  useEffect(() => {
    fetchElectedMembers();
    fetchCommiteDetails(route?.params?.item?.CommitteeId);
  }, []);

  useEffect(() => {
    if (commiteDetailState?.length > 0) {
      const isElectedMember = commiteDetailState.some(
        member => member.CommitteeName === 'Elected Member',
      );

      if (isElectedMember) {
        setCommitteelist([...electedMembersState, ...commiteDetailState]);
      } else {
        setCommitteelist(commiteDetailState);
      }
    }
  }, [commiteDetailState, electedMembersState]);

  const commiteDetailList = isSearch ? results : committeelist;

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
        title={route.params.item.CommitteeName}
        showSearch={false}
        search={search}
        setSearch={setSearch}
        searchFilterFunction={searchFilterFunction}
        onClearSearch={handleOnClearSearch}
      />

      {commiteDetailList?.length === 0 ? (
        <Emptymessages />
      ) : (
        <ScrollView style={rootStyles.mT}>
          <View style={[rootStyles.commonPadding, rootStyles.bottomStyle]}>
            {commiteDetailList?.map(item => {
              const Number = item.PhoneNo.split(',');
              return (
                <View style={rootStyles.mainBox} key={item.VIAId}>
                  <View style={rootStyles.containBox}>
                    <View style={rootStyles.flexRow}>
                      <FastImage
                        style={rootStyles.designationHolderImg}
                        source={
                          item?.Photo?.length > 0
                            ? {
                                uri: `${officeBearersImageURL}${item.VIAId}${item.Photo}`,
                              }
                            : images.profileIcon
                        }
                        defaultSource={images.profileIcon}
                      />
                      <View style={rootStyles.nameSection}>
                        <Text style={styles.designationHolder}>
                          {item.MemberName}
                        </Text>
                        <Text
                          style={[
                            styles.designation,
                            {width: Platform.OS === 'ios' ? 201 : 192},
                          ]}>
                          {item.OrganisationName}
                        </Text>
                      </View>
                    </View>
                    {item.PhoneNo?.length ? (
                      <View style={[rootStyles.iconFlex, {marginTop: s(10)}]}>
                        {Number.length > 0 ? (
                          <View style={{flexDirection: 'column'}}>
                            {Number.map((value, index) => (
                              <View style={[rootStyles.iconFlex]}>
                                <View
                                  style={[
                                    rootStyles.flexRow,
                                    rootStyles.iconView,
                                    {backgroundColor: Colors.phone},
                                  ]}>
                                  <FastImage
                                    style={rootStyles.icon}
                                    source={images.mobile}
                                  />
                                </View>
                                <TouchableOpacity
                                  key={value}
                                  onPress={() => {
                                    setModalVisible(true);
                                    setCommitteeDetails(value);
                                    setNumberType('mobileNumber');
                                  }}>
                                  <Text
                                    style={[
                                      rootStyles.iconValue,
                                      index === Number.length - 1 && 0,
                                    ]}>
                                    {value}
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            ))}
                          </View>
                        ) : (
                          Number.map((value, index) => (
                            <TouchableOpacity
                              key={value}
                              onPress={() => {
                                setModalVisible(true);
                                setCommitteeDetails(value);
                                setNumberType('mobileNumber');
                              }}>
                              <Text
                                style={[
                                  rootStyles.iconValue,
                                  index === Number.length - 1 && {
                                    marginBottom: 10,
                                  },
                                ]}>
                                {value}
                              </Text>
                            </TouchableOpacity>
                          ))
                        )}
                      </View>
                    ) : null}
                    <View style={rootStyles.iconFlex}>
                      <View
                        style={[
                          rootStyles.flexRow,
                          rootStyles.iconView,
                          {backgroundColor: Colors.Email},
                        ]}>
                        <FastImage
                          style={rootStyles.icon}
                          source={images.email}
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(`mailto:${item.EmailId}`)
                        }>
                        <Text
                          style={[
                            rootStyles.iconValue,
                            {textDecorationLine: 'underline'},
                            {width: 280},
                          ]}>
                          {item.EmailId}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ComfirmModal
          type={numberType}
          numberModal={numberModal}
          setNumberModel={setNumberModel}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          mobileNumber={committeeDetails || ''}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default CommitteeDetailsScreen;
