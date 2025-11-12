import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';

export const styles = StyleSheet.create({

    container : {

        flex:1
    },
  curvedViewContainer: {
    // flexDirection: 'column',
    gap : vh*4,
    marginTop :vh*3
  },
  dateContainer : {
    flexDirection : 'row', 
    gap  : "2%",
  
    
    
  }
});
