import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';

export const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
  },
  loginContent: {
    flex: 1,
    borderWidth: 2,
    marginHorizontal: vw * 4.3,
  },
  logo: {
    width: vw * 60,
    height: vh * 12,
    resizeMode: 'contain',
    borderWidth: 2,
  },
});
