import React, {useCallback, useEffect} from 'react';
import {Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import colors from '../assets/colors';
const OnBoardingSwiper = ({navigation}) => {
  const checkFirstLaunch = useCallback(async () => {
    if (global.firstLaunch) handleDone();
  }, []);

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  const handleDone = () => {
    navigation.push('protectedSceen');
  };
  return (
    <Onboarding
      onSkip={handleDone}
      onDone={handleDone}
      bottomBarColor={colors.LIGHT_GREEN}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/img/grocery.jpg')} />,
          title: 'Sceen 1',
          subtitle:
            'Lorem aliqua ex est aliquip ut laborum do ea esse quis occaecat. Laboris consectetur irure exercitation magna pariatur esse non irure quis.    Irure aliquip voluptate mollit esse. Dolor aute in ullamco dolore sunt laboris exercitation ex esse id.',
          titleStyles: {color: colors.LIGHT_GREEN},
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/img/grocery.jpg')} />,
          title: 'Sceen 2',
          titleStyles: {color: colors.LIGHT_GREEN},
          subtitle:
            'Lorem aliqua ex est aliquip ut laborum do ea esse quis occaecat. Laboris consectetur irure exercitation magna pariatur esse non irure quis.    Irure aliquip voluptate mollit esse. Dolor aute in ullamco dolore sunt laboris exercitation ex esse id.',
        },
      ]}
    />
  );
};

export default OnBoardingSwiper;
