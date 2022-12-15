import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../assets/colors';

export default StyleSheet.create({
  floatButton: {
    padding: 12,
    borderRadius: 50,
    elevation: 3,
    shadowOffset: {width: 2, height: 2},
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.SHADOW,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    position: 'absolute',
    backgroundColor: colors.LIGHT_GREEN,
    bottom: 15,
    right: 15,
  },
  scanButton: {
    padding: wp(10),
    borderRadius: 150,
    elevation: 20,
    shadowOffset: {width: 5, height: 5},
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#111',
    shadowOpacity: 0.7,
    shadowRadius: 50,
    backgroundColor: colors.LIGHT_GREEN,
  },
  scanView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomShadow: {
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.SHADOW,
    shadowOpacity: 0.3,
  },
  modalHeader: {
    width: '95%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  modalClose: {
    width: wp(9),
    height: wp(9),
    padding: 4,
    backgroundColor: colors.DARK_GRAY,
    borderRadius: 30,
  },
  modalTitle: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: wp(6),
    fontWeight: 'bold',
    color: colors.SHADOW,
  },
  modalContent: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(80),
  },
  frameCpy: {
    position: 'absolute',
    zIndex: 2,
    elevation: 2,
    alignSelf: 'center',
  },
  frame: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 40,
    width: wp(70),
    height: hp(75),
    zIndex: 2,
    elevation: 2,
  },
  frameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frameItem: {
    width: wp('18'),
    height: wp('18'),
  },
  alertModal: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    marginTop: 200,
    marginBottom: 200,
    alignContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBlock: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  title: {
    marginLeft: 10,
  },
  input: {
    borderRadius: 3,
    borderColor: colors.MEDIUM_GRAY,
    padding: 10,
    borderWidth: 1,
    width: wp(100),
    marginBottom: 20,
  },
  carContainer: {
    height: hp(7),
    marginVertical: wp(5),
  },
  cardInfo: {
    width: wp(37),
  },
  button: {
    width: wp('80%'),
    marginBottom: 20,
  },
  signinBlock: {
    flexDirection: 'row',
  },
  link: {
    color: colors.LIGHT_GREEN,
    marginLeft: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBlock: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  title: {
    marginLeft: 10,
  },
  input: {
    borderRadius: 3,
    borderColor: colors.MEDIUM_GRAY,
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
  fullWidth: {
    width: wp('100%'),
  },
  button: {
    width: wp('80%'),
    marginBottom: 20,
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
    color: colors.DARK_GRAY,
    fontSize: wp(4),
    marginBottom: 5,
  },
  rowSegment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowItem: {
    width: wp(40),
  },
  details: {
    justifyContent: 'flex-start',
    paddingHorizontal: wp(10),
    width: wp('100%'),
  },
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
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    height: 200,
    marginBottom: 20,
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 50,
    marginTop: 30,
  },
  qty: {
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
    flex: 3,
  },
  price: {
    color: colors.LIGHT_GREEN,
    fontSize: wp(8),
    marginTop: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBlock: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  title: {
    marginLeft: 10,
  },
  input: {
    borderRadius: 3,
    borderColor: colors.MEDIUM_GRAY,
    padding: 10,
    borderWidth: 1,
    width: wp('80%'),
    marginBottom: 20,
  },
  button: {
    width: wp('80%'),
    marginBottom: 20,
  },
  signinBlock: {
    flexDirection: 'row',
  },
  link: {
    color: colors.LIGHT_GREEN,
    marginLeft: 10,
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
  errorText: {
    color: colors.DARK_RED,
    width: wp('80%'),
    marginTop: -15,
    marginBottom: 10,
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
  showPasswordIcon: {
    position: 'absolute',
    zIndex: 10,
    right: wp(3),
    top: wp(2),
  },
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
  },
});
