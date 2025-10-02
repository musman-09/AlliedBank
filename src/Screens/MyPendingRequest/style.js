import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor : "red"
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: vw * 3,

    marginTop: vh * 1.5,
  },
  loaderContainer: {
    textAlign: 'center',
    marginTop: vh * 10,
    fontSize: vw * 4,
  },
  loadercontainer: {
    marginTop: vh * 10,
  },
});
