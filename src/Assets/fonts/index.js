import { Platform } from 'react-native';

export const fonts = {
  Roboto: {
    bold: Platform.select({
      android: 'Roboto-SemiBold',
      ios: 'Roboto-SemiBold',
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
