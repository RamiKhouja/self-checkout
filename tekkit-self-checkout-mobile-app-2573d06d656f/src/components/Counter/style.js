import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  counterColumn: {
    flex: 1,
    borderColor: colors.DARK_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterInitValueContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initValueStyle: {
    color: colors.DARK_GRAY,
  },
  rightComponent: {
    borderRightWidth: 1,
  },
  leftComponent: {
    borderLeftWidth: 1,
  },
});
