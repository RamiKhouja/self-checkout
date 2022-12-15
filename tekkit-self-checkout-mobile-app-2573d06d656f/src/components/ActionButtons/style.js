import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  addproductsModalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    alignSelf: 'flex-end',
    width: '100%',
    paddingHorizontal: 10,
  },
  detailIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  iconButton: {
    backgroundColor: colors.DARK_GRAY,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
