import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // Alert.alert('Failed to save the data to the storage');
  }
};
export const readData = async key => {
  try {
    const res = await AsyncStorage.getItem(key);
    if (res !== null) {
      return res;
    }
  } catch (e) {
    // Alert.alert('Failed to fetch the data from storage');
  }
};
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    // Alert.alert('Storage successfully cleared!');
  } catch (e) {
    // Alert.alert('Failed to clear the async storage.');
  }
};

export const removeItem = async key => {
  try {
    console.log('try==========');
    await AsyncStorage.removeItem(key);
    console.log('Data removed');
  } catch (exception) {
    console.log(exception);
  }
};
