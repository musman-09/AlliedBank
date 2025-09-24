import { StyleSheet } from 'react-native';
import { vw } from '../../Assets/themes/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  graphContainer: {
    flexDirection: 'row',
    // borderWidth: 2,
    gap : vw*11,
  },
});
