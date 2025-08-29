import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const RobotoRegular = ({ name, style }) => {
  return <Text style={[Style.textStyle, style]}>{name}</Text>;
};

export default RobotoRegular;

const Style = StyleSheet.create({
  textStyle: {
    fontFamily: fonts.Aileron.bold,
    textAlign: 'center',
    color: COLORS.textColor,
    fontSize: vw * 1.3,
  },
});
