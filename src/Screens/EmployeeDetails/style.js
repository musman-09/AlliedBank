import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';

export const styles = StyleSheet.create({
  
container :{
    flex:1,
    // borderWidth:2,
    // backgroundColor  : "red",
},
curvedViewContent : {

    marginHorizontal : vw*2,
    paddingHorizontal : vw*4

},
value: {
    fontSize : vw*4
},
label : {
    fontSize  : vw*4.5
}


});
