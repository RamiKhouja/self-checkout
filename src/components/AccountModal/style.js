import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  input: {
    borderRadius: 3,
    borderColor: colors.MEDIUM_GRAY,
    padding: 10,
    borderWidth: 1,
    width: wp(80),
    marginBottom: 20,
  },
  errorText: {
    color: colors.DARK_RED,
    width: wp('80%'),
    marginTop: -15,
    marginBottom: 10,
  },
  button: {
    width: wp('80%'),
    marginBottom: 20,
  },
});
