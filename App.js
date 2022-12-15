import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, LogBox, Alert, View} from 'react-native';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import Navigator from './src/navigation/DefaultStack';

import {persistor, sagaMiddleware, store} from './src/redux/store';
import {AppAlreadyLaunched} from './src/utils/checkFirstLaunch';
import rootSaga from './src/redux/sagas';
import colors from './src/assets/colors';
import codePush from 'react-native-code-push';

import {NODE_ENV} from '@env';

sagaMiddleware.run(rootSaga);
let codePushConfig = {checkFrequency: codePush.CheckFrequency.MANUAL};
const App = () => {
  LogBox.ignoreAllLogs(true);

  const checkFirstLaunch = useCallback(() => {
    AppAlreadyLaunched();
  }, []);

  useEffect(() => {
    if (NODE_ENV === 'Production') {
      codePush.sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE,
      });
    }

    checkFirstLaunch();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
          </View>
        }
        persistor={persistor}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default codePush(codePushConfig)(App);
