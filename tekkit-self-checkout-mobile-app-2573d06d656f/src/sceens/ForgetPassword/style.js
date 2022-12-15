import {StyleSheet} from 'react-native';

import colors from '../../assets/colors';

export default StyleSheet.create({
  spinnerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    position: 'absolute',
    zIndex: 100,
  },
});
