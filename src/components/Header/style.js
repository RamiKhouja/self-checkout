import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  header: {
    width: wp(100),
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerRight: {
    flexDirection: 'row',
    width: wp(48),
    justifyContent: 'space-between'
  },
  cartQty: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: 20,
    height: 20,
    backgroundColor: colors.LIGHT_GREEN,
    textAlign: 'center',
    color: colors.WHITE,
    fontSize: 13,
    marginTop: -7,
    marginLeft: -3,
  },
});
