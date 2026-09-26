import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function checkPermission() {
  const authStatus = await messaging().hasPermission();
  console.log('authStatus===>', authStatus);
  if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
    getToken();
  } else if (authStatus === messaging.AuthorizationStatus.NOT_DETERMINED) {
    await requestPermission();
    await setHandler();
    await registerApp();
    await getToken();
  }
}

export async function setHandler() {
  try {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
  } catch (error) {
    console.log('device not registered');
  }
}

export async function registerApp() {
  try {
    await messaging().registerDeviceForRemoteMessages();
  } catch (error) {
    console.log('device not registered');
  }
}

export async function getToken() {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log('fcmToken===>', fcmToken);
  const isDeviceRegistered = messaging().isDeviceRegisteredForRemoteMessages;
  if (!fcmToken && isDeviceRegistered) {
    fcmToken = await messaging().getToken();
    if (fcmToken) {
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
  }
}

export async function requestPermission() {
  try {
    await messaging().requestPermission();
  } catch (error) {
    console.log('permission rejected');
  }
}

export const getAndSetToken = updateUserToken => {
  getToken().then(() => {
    AsyncStorage.getItem('fcmToken').then(fcmToken => {
      if (fcmToken) {
        updateUserToken(fcmToken);
      }
    });
  });
};
