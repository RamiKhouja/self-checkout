import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  total: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalText: {
    fontSize: wp(6),
    color: colors.SHADOW,
    fontWeight: '700',
  },
  totalPrice: {
    color: colors.LIGHT_GREEN,
  },
  actionButtonsContainer: {
    paddingTop: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  actionButton: {
    flexDirection: 'row',
    backgroundColor: colors.LIGHT_GREEN,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3,
    elevation: 2,
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.DARK_GRAY,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  diabledButton: {
    backgroundColor: colors.GRAY,
    color: colors.DARK_GRAY,
  },
  payText: {
    color: colors.WHITE,
    fontSize: wp(4),
    fontWeight: '700',
  },
  actionButtonOutline: {
    backgroundColor: colors.LIGHT_GRAY,
  },
  payTextOutline: {
    color: colors.LIGHT_GREEN,
    fontSize: wp(4),
    fontWeight: '700',
  },
  paymentButtonsContainer: {
    backgroundColor: colors.WHITE,
    paddingBottom: 2,
    paddingTop: 5,
  },
});
