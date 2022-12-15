import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  label: {
    fontWeight: 'bold',
    color: colors.DARK_GRAY,
    fontSize: wp(4),
    marginBottom: 5,
  },
  input: {
    borderRadius: 3,
    borderColor: colors.MEDIUM_GRAY,
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
  carContainer: {
    height: hp(7),
    marginVertical: wp(5),
  },
});
