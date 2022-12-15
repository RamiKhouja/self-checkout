import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bold: {
    fontWeight: '700',
    color: '#111',
  },
  green: {
    color: colors.LIGHT_GREEN,
  },
  red: {
    color: '#A93226',
  },
  orange: {
    color: '#D78703',
  },
  button: {
    borderRadius: 30,
    borderWidth: 1.5,
    borderStyle: 'solid',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailsButton: {
    borderColor: colors.LIGHT_GREEN,
    backgroundColor: colors.WHITE,
  },
  detailsText: {
    color: colors.LIGHT_GREEN,
    fontWeight: '700',
  },
  editButton: {
    borderColor: colors.LIGHT_GREEN,
    backgroundColor: colors.LIGHT_GREEN,
  },
  editText: {
    color: colors.WHITE,
    fontWeight: '700',
  },
});
