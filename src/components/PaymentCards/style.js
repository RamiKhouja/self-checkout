import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  imgs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  img: {
    width: wp(15),
    height: wp(7),
    marginHorizontal: 10,
  },
});
