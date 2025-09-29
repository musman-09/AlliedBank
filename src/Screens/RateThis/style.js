import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';

export const styles = StyleSheet.create({
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh * 2,
  },
  container: {
   
    justifyContent: 'center',
    alignItems: 'center',
    gap : vh*4,
    marginTop : vh*1.5
  },
  headingText: {
    fontSize: vw * 10,

    textAlign: 'center',
  },
  smileText: {
    fontSize: vw * 8,
  },
  smileIcon: {
    width: vw * 60,
    height: vw * 60,
    resizeMode: 'contain',
  },
  stars: {
    flexDirection: 'row',
  },
  starIcon: {
    width: vw * 10,
    height: vw * 10,
    resizeMode: 'contain',
  },
});
