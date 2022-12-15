import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  modalWrapper: {flex: 1, borderRadius: 10},
  container: {
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    flex: 1,
    paddingTop: 10,
    elevation: 30,
    shadowOffset: {width: 30, height: 30},
    alignItems: 'center',
    shadowColor: '#111',
    shadowOpacity: 0.7,
    shadowRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'baseline',
    paddingVertical: '3%',
    paddingHorizontal: '5%',
  },
  modalClose: {
    padding: 6,
    backgroundColor: colors.DARK_GRAY,
    borderRadius: 30,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.LIGHT_GREEN,
  },
  modalContent: {
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(85),
    height: hp(85)
  },
});
