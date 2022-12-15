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
  showPasswordIcon: {
    position: 'absolute',
    zIndex: 10,
    right: wp(3),
    top: wp(2),
  },
  button: {
    width: wp('80%'),
    marginBottom: 20,
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
