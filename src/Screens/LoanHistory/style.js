import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  graphContainer: {},
  tabsContainer: {
    // borderWidth:2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '5',

    marginTop: vh,
  },
  tabContainer: {
    // borderWidth:2,
    paddingHorizontal: vw * 1,
    width: '32%',
  },
  labelStyle: {
    fontSize: vw * 3,
  },
  table: {
    marginTop: vh * 2,



   
  },
});
