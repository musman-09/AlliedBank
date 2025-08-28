import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const RobotoSemiBold = ({ name, style }) => {
  return <Text style={[Style.textStyle, style]}>{name}</Text>;
};

export default RobotoSemiBold;

const Style = StyleSheet.create({
  textStyle: {
    fontFamily: fonts.Aileron.bold,
    textAlign: 'center',
    color: COLORS.textColor,
    fontSize: vw * 1.3,
    // lineHeight: vh * 1.5,
    // letterSpacing: vw * 0.121,
  },
});
