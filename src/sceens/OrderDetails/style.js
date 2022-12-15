import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
    marginVertical: hp(2),
  },

  infoRowAround: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },

  bold: {
    color: '#111',
    fontWeight: '700',
  },
  bottomBorder: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  darkGray: {
    color: '#111',
  },
  orderInfo: {
    marginVertical: hp(3),
  },
});
