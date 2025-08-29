import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';

export const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
  },
  loginContent: {
    flex: 1,

    marginHorizontal: vw * 4.3,
    alignItems: 'center',
  },
  logo: {
    width: vw * 65,
    height: vh * 12,
    resizeMode: 'contain',
  },
  logoContent: {
    marginTop: vh * 20,
    gap: vh * 2,
    marginBottom: vh * 2,
  },
  logoHeading: {
    color: COLORS.orange,
    fontSize: vw * 7,
  },
  logoHeadingAccount: {
    color: COLORS.blue,
    fontSize: vw * 7,
  },
  labelStyle: {
    color: COLORS.labelColor,
    fontSize: vw * 5,
  },
  ButtonTitle: {
    color: COLORS.white,
    fontSize: vw * 5,
  },

  logoHeadingRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: vh * 2,
    width: '100%',
  },
});
