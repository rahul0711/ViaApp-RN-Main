import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './src/redux/store/Store';
import StackNavigator from './src/navigation/StackNavigator';
import SplashScreen from 'react-native-splash-screen';

const store = configureStore();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
