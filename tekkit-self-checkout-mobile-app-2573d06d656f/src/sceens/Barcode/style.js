import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    backgroundColor: colors.WHITE,
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  addToCartproductName: {
    color: colors.MEDIUM_GRAY,
    fontSize: wp(5),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  barcodeScreen: {width: hp(35), height: 100},
  frameItem: {
    width: wp('18'),
    height: wp('18'),
  },
  frame: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 40,
    width: wp(70),
    height: hp(75),
    zIndex: 2,
    elevation: 2,
  },
  frameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
