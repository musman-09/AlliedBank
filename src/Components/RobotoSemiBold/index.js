import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { fonts } from '../../Assets/fonts';
import { COLORS } from '../../Assets/themes/color';
import { vw } from '../../Assets/themes/dimension';

const RobotoSemiBold = ({ name, style }) => {
  return <Text style={[Style.textStyle, style]}>{name}</Text>;
};

export default RobotoSemiBold;

const Style = StyleSheet.create({
  textStyle: {
    fontFamily: fonts.Roboto.regular,
    // textAlign: 'center',
    color: COLORS.textColor,
    fontSize: vw * 1.3,
  },
});
