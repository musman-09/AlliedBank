import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import RobotoBold from '../../Components/RobotoBold';
import { icons } from '../../Assets/index';
import { vh, vw } from '../../Assets/themes/dimension';

const NoDataFound = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icons.noDataFound} />
      <RobotoBold style={styles.text} name={title} />
    </View>
  );
};

export default NoDataFound;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: vw * 15,
    height: vw * 15,
    resizeMode: 'contain',

    marginTop: vw * 10,
  },
});
