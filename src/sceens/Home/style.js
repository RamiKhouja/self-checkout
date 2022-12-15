import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  scanView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButton: {
    padding: wp(10),
    borderRadius: 150,
    elevation: 20,
    shadowOffset: {width: 5, height: 5},
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#111',
    shadowOpacity: 0.7,
    shadowRadius: 50,
    backgroundColor: colors.LIGHT_GREEN,
  },
});
