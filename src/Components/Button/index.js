import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import RobotoBold from '../RobotoBold';
import { COLORS } from '../../Assets/themes/color';
import { vh, vw } from '../../Assets/themes/dimension';

const Button = ({ title, titleStyle }) => {
  return (
    <View style={styles.container}>
      <RobotoBold style={titleStyle} name={title} />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    borderRadius: vw,
    backgroundColor: COLORS.orange,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vh * 2.5,
  },
});
