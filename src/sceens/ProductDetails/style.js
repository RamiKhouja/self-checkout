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
  titleText: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bold',
    color: colors.SHADOW,
  },
  price: {
    color: colors.LIGHT_GREEN,
    fontSize: wp(8),
    marginTop: 10,
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 50,
    marginTop: 30,
  },
  quantityLabel: {
    borderRadius: 3,
    borderColor: colors.GRAY,
    padding: 10,
    borderWidth: 1,
    flex: 2,
    marginRight: 20,
    height: 35,
    backgroundColor: colors.WHITE,
  },
  button: {
    width: wp('80%'),
    marginBottom: 20,
  },
});
