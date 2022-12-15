import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: colors.WHITE,
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.SHADOW,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    marginBottom: 20,
    width: wp(82),
  },
});
