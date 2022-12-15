import {StyleSheet} from 'react-native';

import colors from '../colors';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bold',
    color: colors.SHADOW,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    fontFamily: 'Nunito-Regular',
  },
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.DARKER_WHITE,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: colors.CRIMSON,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
});
