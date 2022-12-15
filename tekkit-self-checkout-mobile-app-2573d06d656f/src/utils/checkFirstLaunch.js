import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppAlreadyLaunched = async () =>
  await AsyncStorage.getItem('firstLaunch').then(result => {
    if (result !== null) {
      global.firstLaunch = true;
    } else {
      AsyncStorage.setItem('firstLaunch', 'true');
      global.firstLaunch = false;
    }
  });
