import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';
import RobotoBold from '../../Components/RobotoBold';
import RobotoRegular from '../RobotoRegular';



const PopupCard = ({ title, detail, logo, buttonName }) => {
  return <View style={styles.container}>


<Image source={logo} />


<RobotoBold name={title}/>

<RobotoRegular name={detail}/>











  </View>;
};

export default PopupCard;

const styles = StyleSheet.create({
  container: {},
});
