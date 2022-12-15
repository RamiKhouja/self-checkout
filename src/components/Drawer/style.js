import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  drawerHeaderContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: hp(10),
    paddingBottom: hp(10),
    backgroundColor: colors.LIGHT_GREEN,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
    transform: [{scaleX: 1.4}],
    marginBottom: 50,
  },
  drawerAvatar: {
    width: wp(70),
    height: hp(12),
    transform: [{scaleX: 0.7}],
  },
  drawerContentContainer: {flex: 2},
  drawerBottom: {
    height: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  poweredSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  poweredText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.GRAY,
    marginRight: 10,
  },
  oncodeLogo: {
    height: 30,
    width: 80,
  },
  version: {
    textAlign: 'center',
    color: colors.DARK_GRAY,
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});
