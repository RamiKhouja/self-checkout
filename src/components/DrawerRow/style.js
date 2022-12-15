import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  drawerItemTitle: {
    marginLeft: 20,
    width: 100,
    fontSize: wp(4),
    fontWeight: 'bold',
    color: colors.DARK_GRAY,
  },
  drawerItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: wp(22),
    alignItems: 'center',
    paddingTop: hp(1),
    paddingBottom: wp(5),
  },
});
