import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import RobotoBold from '../RobotoBold';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';

const Tabs = ({ name, onPress, isActive }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: isActive ? COLORS.blueTabs : COLORS.whiteTabs },
      ]}
    >
      <RobotoBold
        name={name}
        style={{ color: isActive ? COLORS.white : COLORS.black }}
      />
    </TouchableOpacity>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    paddingVertical: vh,
    width: '35%',
    borderRadius: vw * 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
