import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  titleBlock: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  title: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bold',
    color: colors.SHADOW,
  },
  details: {
    justifyContent: 'flex-start',
    paddingHorizontal: wp(10),
    width: wp('100%'),
  },
  button: {
    width: wp('80%'),
    marginBottom: 20,
  },
});
