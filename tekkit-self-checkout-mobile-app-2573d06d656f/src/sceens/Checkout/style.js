import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutTitle: {
    fontSize: wp(6),
    color: colors.LIGHT_GREEN,
    fontWeight: '700',
    marginBottom: wp(20),
    textAlign: 'center',
  },
  checkoutText: {
    fontSize: wp(5),
    color: colors.SHADOW,
    fontWeight: '300',
    marginTop: wp(20),
    marginLeft: wp(15),
    marginRight: wp(15),
  },
  spinnerContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
