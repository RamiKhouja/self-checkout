import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  orderInfo: {
    marginVertical: hp(3),
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  darkGray: {
    color: '#111',
  },
});
