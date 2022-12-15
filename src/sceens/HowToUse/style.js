import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: 20
  },
  text: {
    color: colors.DARK_GRAY,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify'
  },
  subtitle: {
    color: colors.LIGHT_GREEN,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 10
  },
  section: {
    marginBottom: 30
  },
  image: {
    width: wp(90),
    height: wp(90)
  }
});
