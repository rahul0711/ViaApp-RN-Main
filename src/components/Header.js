import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {Fonts} from '../styles/fonts';
import {rootStyles} from '../styles/rootStyle';
import {Colors} from '../styles/colors';
import {images} from '../assets/images/index';
import {useNavigation} from '@react-navigation/native';

const truncateCommitteeName = (committeeName, maxCharacters) => {
  const screenWidth = Dimensions.get('window').width;
  const maxCharacterCount = 18;
  if (screenWidth >= 600) {
    return committeeName;
  } else {
    if (committeeName.length > maxCharacterCount) {
      return committeeName.slice(0, maxCharacterCount) + '...';
    }
    return committeeName;
  }
}

export const Header = ({
  title,
  search,
  searchFilterFunction,
  onClearSearch,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      {showSearch ? (
        <View
          style={[rootStyles.spaceBetween, styles.inputView, rootStyles.mT10]}>
          <View style={rootStyles.rowCenter}>
            <Image style={styles.search} source={images.search} />
            <TextInput
              style={styles.input}
              onChangeText={text => searchFilterFunction(text)}
              value={search}
              placeholder="Search"
              placeholderTextColor={Colors.placeHolderColor}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowSearch(false);
              onClearSearch();
            }}>
            <Image style={styles.close} source={images.close} />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[rootStyles.spaceBetween, rootStyles.mH15, rootStyles.mT10]}>
          <TouchableOpacity
            style={styles.backView}
            onPress={() => navigation.goBack()}>
            <Image source={images.back} />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>
          {truncateCommitteeName(title)}
          </Text>
          <View style={rootStyles.rowCenter}>
            <TouchableOpacity
              style={styles.searchView}
              onPress={() => {
                setShowSearch(true);
              }}>
              <Image source={images.search} />
            </TouchableOpacity>
            <Image source={images.vialogo} style={styles.viaLogo} />
          </View>
        </View>
      )}
    </>
  );
};

export const TitleHeader = ({onPress, title, source}) => {
  return (
    <View style={[rootStyles.mT10, styles.titleHeaderStyle]}>
      <TouchableOpacity style={styles.menuView} onPress={onPress}>
        <Image source={source} style={styles.menuIcon} />
      </TouchableOpacity>
      <View>
        <Text style={styles.menuTitle}>{truncateCommitteeName(title)}</Text>
      </View>
      <View>
        <Image source={images.vialogo} style={styles.viaLogo} />
      </View>
    </View>
  );
};

export const BackHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={[rootStyles.mT10, styles.titleHeaderStyle]}>
      <TouchableOpacity
        style={[styles.backView, rootStyles.mT10]}
        onPress={() => navigation.goBack()}>
        <Image source={images.back} />
      </TouchableOpacity>
      <Image source={images.vialogo} style={styles.viaLogo} />
    </View>
  );
};

export const SimpleHeader = ({
  title,
  search,
  searchFilterFunction,
  onClearSearch,
  hasSearch = true,
}) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {showSearch ? (
        <View
          style={[rootStyles.spaceBetween, styles.inputView, rootStyles.mT10]}>
          <View style={rootStyles.rowCenter}>
            <Image style={styles.search} source={images.search} />
            <TextInput
              style={styles.input}
              onChangeText={text => searchFilterFunction(text)}
              value={search}
              placeholder="Search"
              placeholderTextColor={Colors.placeHolderColor}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowSearch(false);
              onClearSearch();
            }}>
            <Image style={styles.close} source={images.close} />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[rootStyles.spaceBetween, rootStyles.mH15, rootStyles.mT10]}>
          <TouchableOpacity
            style={styles.backView}
            onPress={() => {
              setShowSearch(true);
            }}>
            <Image source={images.search} />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {title}
          </Text>
          <View>
            <Image source={images.vialogo} style={styles.viaLogo} />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  backView: {
    height: ms(40),
    width: ms(40),
    borderRadius: 10,
    backgroundColor: Colors.offWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchView: {
    height: ms(40),
    width: ms(40),
    borderRadius: 10,
    backgroundColor: Colors.offWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: Fonts.size.l,
    fontFamily: Fonts.family.PoppinsSemiBold,
    color: Colors.darkPrimaryColor,
    textAlign: 'center',
  },
  menuView: {
    height: ms(40),
    width: ms(40),
    borderRadius: 10,
    backgroundColor: Colors.offWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: Fonts.size.l,
    fontFamily: Fonts.family.PoppinsSemiBold,
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? vs(10) : vs(5),
    color: Colors.darkPrimaryColor,
  },
  input: {
    height: ms(45),
    width: ms(250),
    fontSize: Fonts.size.m,
    fontFamily: Fonts.family.PoppinsMedium,
    color: Colors.black,
    marginTop: vs(5),
  },
  inputView: {
    backgroundColor: Colors.offWhite,
    marginHorizontal: s(15),
    borderRadius: 10,
  },
  search: {
    width: ms(20),
    height: ms(20),
    marginHorizontal: s(10),
  },
  close: {
    width: ms(12),
    height: ms(12),
    marginRight: s(10),
  },
  HeaderStyle: {
    height: ms(46),
    width: ms(46),
  },
  viaLogo: {
    height: vs(40),
    width: s(46),
    resizeMode: 'contain',
    marginLeft: s(5),
  },
  titleHeaderStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(15),
    zIndex: 999,
  },
});
