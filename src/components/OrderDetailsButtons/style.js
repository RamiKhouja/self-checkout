import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  infoRowAround: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    borderRadius: 30,
    borderWidth: 1.5,
    borderStyle: 'solid',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailsButton: {
    borderColor: colors.LIGHT_GREEN,
    backgroundColor: colors.WHITE,
  },
  detailsText: {
    color: colors.LIGHT_GREEN,
    fontWeight: '700',
  },

  printButton: {
    borderColor: colors.LIGHT_GREEN,
    backgroundColor: colors.LIGHT_GREEN,
  },
  printText: {
    color: colors.WHITE,
    fontWeight: '700',
  },
});
