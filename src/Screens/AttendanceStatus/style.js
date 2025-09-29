import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';
import { AppRegistry } from 'react-native/types_generated/index';
// import { BounceInDown } from "react-native-reanimated";

export const styles = StyleSheet.create({
  calenderContainer: {
    elevation: 3,
    borderRadius: vw * 2,
    marginVertical: vh * 5,
    backgroundColor: COLORS.white,
    marginHorizontal: vw * 2,

    paddingHorizontal: vw * 2,

    paddingVertical: vh,
    gap: vh,
  },
  squareBlue: {
    width: vw * 6,
    height: vw * 6,
    backgroundColor: COLORS.blue,
    borderRadius: 4,
    marginRight: 8,
  },
  squarePink: {
    width: vw * 6,
    height: vw * 6,
    backgroundColor: COLORS.pink,
    borderRadius: 4,
    marginRight: 8,
  },
  squareGreen: {
    width: vw * 6,
    height: vw * 6,
    backgroundColor: COLORS.seaGreen,
    borderRadius: 4,
    marginRight: 8,
  },
  squareOrange: {
    width: vw * 6,
    height: vw * 6,
    backgroundColor: COLORS.lightOrange,
    borderRadius: 4,
    marginRight: 8,
  },
  leave: {
    flexDirection: 'row',

    alignItems: 'center',

  },
  identifier: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: vw * 3,
    marginTop: vh * 1.5,

    alignItems: 'center',
    marginLeft: vw * 3,
  },
});
