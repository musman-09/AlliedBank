import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';
// import { BounceInDown } from "react-native-reanimated";

export const styles = StyleSheet.create({
  calenderContainer: {
    elevation: 3,
    borderRadius: vw * 2,
    marginVertical: vh * 5,
    backgroundColor: COLORS.white,
    marginHorizontal: vw * 2,
    // backgroundColor: 'yellow',
    // borderWidth:2
  },
});
