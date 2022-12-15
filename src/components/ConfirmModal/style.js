import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 7,
  },
  addToCartmodalTitle: {
    marginTop: 20,
    fontSize: wp(5),
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.LIGHT_GREEN,
  },
  addToCartproductName: {
    color: colors.MEDIUM_GRAY,
    fontSize: wp(5),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnTxts: {flexDirection: 'row', justifyContent: 'space-between', width: wp(50)},
  btnTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  green: {
    color: colors.LIGHT_GREEN
  },
  gray: {
    color: colors.DARK_GRAY
  },
});
