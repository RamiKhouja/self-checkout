import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  cardImage: {
    height: hp(25),
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
    backgroundColor: colors.LIGHT_GRAY,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 6,
    elevation: 2,
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.DARK_GRAY,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    color: colors.LIGHT_GREEN,
    fontSize: wp(4),
    fontWeight: '700',
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  flatList: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loadMoreSpinner: {
    paddingTop: 2,
    height: hp(10),
  },
});
