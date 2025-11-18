import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { fonts } from '../../Assets/fonts';
import { vw } from '../../Assets/themes/dimension';

const RobotoBold = ({ name, style }) => {
  return <Text style={[Style.textStyle, style]}>{name}</Text>;
};

export default RobotoBold;

const Style = StyleSheet.create({
  textStyle: {
    fontFamily: fonts.Roboto.bold,
    fontSize: vw * 4,
  },
});
