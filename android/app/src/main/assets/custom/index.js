import { Platform } from 'react-native';

export const fonts = {
  Roboto: {
    bold: Platform.select({
      android: 'Roboto-Bold',
      ios: 'Roboto-Bold',
    }),
    regular: Platform.select({
      android: 'Roboto-Regular',
      ios: 'Roboto-Regular',
    }),
    light: Platform.select({
      android: 'Roboto-Medium',
      ios: 'Roboto-Medium',
    }),
    semibold: Platform.select({
      android: 'Roboto-Medium',
      ios: 'Roboto-Medium',
    }),
  },
};
