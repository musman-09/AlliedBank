import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';

export const styles = StyleSheet.create({
  usefulLinksContainer: {},
  usefulCard: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',

    paddingVertical: vh,
    paddingBottom: vh * 2,
    paddingHorizontal: vw * 2,
    borderBottomWidth: vw * 0.4,
    borderColor: COLORS.borderColor,
  },
  icon: {
    width: vw * 12,
    height: vw * 12,
    resizeMode: 'contain',
  },
  linkText: {
    fontSize: vw * 3.5,

    maxWidth: vw * 60,
  },
  ArrowIcon: {
    width: vw * 6,
    height: vw * 6,
    resizeMode: 'contain',
  },
});
