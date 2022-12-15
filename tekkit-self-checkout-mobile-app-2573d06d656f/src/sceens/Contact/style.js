import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  titleBlock: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bold',
    color: colors.DARK_GRAY,
    marginLeft: 10,
  },
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
  actionButton: {
    flexDirection: 'row',
    backgroundColor: colors.LIGHT_GREEN,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 13,
    paddingBottom: 13,
    borderRadius: 3,
    elevation: 2,
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.DARK_GRAY,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: '80%',
    justifyContent: 'center',
  },
  submitTitle: {color: colors.WHITE, fontWeight: 'bold'},
  poweredSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  poweredText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.GRAY,
    marginRight: 10,
  },
  oncodeLogo: {
    height: 30,
    width: 80,
  },
});
