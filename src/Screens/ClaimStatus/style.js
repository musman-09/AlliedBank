import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  curvedViewContent: {},
  crowselBar: {
    flexDirection: 'row'
    ,
    width: "70%",

    alignItems: 'center',

      
    justifyContent: 'space-between',
  },
  crowseIcon: {
    width: vw * 6,
    height: vw * 6,
    resizeMode: 'contain',
  },
});
