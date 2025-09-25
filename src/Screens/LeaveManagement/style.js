import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  graphContainer: {
    flexDirection: 'row',
    // borderWidth: 2,
    marginTop : vh,
    gap : vw*11,
    justifyContent:'center'
  },
    barIdentifier: {
    flexDirection: 'row',

    width: '40%',
    gap: vw * 1.2,
    // borderWidth:2
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
});
