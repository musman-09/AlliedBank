import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const RobotoMedium = ({ name, style }) => {
  return <Text style={[Style.textStyle, style]}>{name}</Text>;
};

export default RobotoMedium;

const Style = StyleSheet.create({
  textStyle: {
    fontFamily: fonts.Roboto.medium,
    // textAlign: 'center',
    color: COLORS.textColor,
    fontSize: vw * 1.3,
  },
});
