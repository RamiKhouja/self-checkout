import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';

export default StyleSheet.create({
  withKeyboardView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scrollView: {paddingTop: wp(20)},
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBlock: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bold',
    color: colors.SHADOW,
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
  nameInputBlock: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  nameInput: {
    borderRadius: 3,
    borderColor: colors.MEDIUM_GRAY,
    padding: 10,
    borderWidth: 1,
    width: wp('38%'),
  },
  button: {
    width: wp('80%'),
    marginBottom: 20,
    marginTop: 20,
  },
  signinBlock: {
    flexDirection: 'row',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    fontFamily: 'Nunito-Regular',
  },
  link: {
    color: colors.LIGHT_GREEN,
    marginLeft: 10,
  },
});
