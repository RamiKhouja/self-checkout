import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  minicart: {
    flex: 1
  },
  list: {
    marginTop: 20,
    height: hp(50),
  },
  cartCard: {
    flexDirection: 'row',
  },
  cartImageWrapper: {
    justifyContent: 'center',
    padding: 7,
  },
  cartCardImage: {
    height: hp(10),
    width: wp(18),
  },
  cartCardContent: {
    marginHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  miniCartItemPrice: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    color: colors.LIGHT_GREEN,
    fontWeight: '700',
  },
  miniCounterContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.DARK_GRAY,
    borderRadius: 3,
    width: wp(40),
    height: 40,
  },
  emptyView: {
    justifyContent: 'center', 
    alignContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },
  imageEmpty: {
    width: wp(70),
    height: wp(70)
  },
  textEmpty: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.MEDIUM_GRAY
  }
});
