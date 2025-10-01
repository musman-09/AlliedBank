import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: vw * 3,
    // borderWidth: 2,
    marginTop: vh * 1.5,
  },
  loaderContainer: {
    textAlign: 'center',
    marginTop: vh * 6,
  },
});
