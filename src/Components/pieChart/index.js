import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { vh, vw } from '../../Assets/themes/dimension';
import RobotoBold from '../RobotoBold';
import RobotoRegular from '../RobotoRegular';
import { COLORS } from '../../Assets/themes/color';

const PieChartComponent = ({ data, chartLabel, approve, balance }) => {
  const chartData = [
    { value: approve, color: COLORS.green },
    { value: balance, color: COLORS.blue },
  ];

  return (
    <View style={styles.container}>
      <RobotoBold style={styles.label} name={chartLabel} />
      <PieChart
        donut
        radius={70}
        innerRadius={45}
        data={chartData}
        centerLabelComponent={() => (
          <Text style={{ fontSize: vw * 3, flexDirection: 'row' }}>
            <Text style={{ color: COLORS.green }}>{approve}</Text>
            <Text style={{ color: 'black' }}> / </Text>
            <Text style={{ color: COLORS.blue }}>{balance}</Text>
          </Text>
        )}
      />
    </View>
  );
};

export default PieChartComponent;

const styles = StyleSheet.create({
  container: {
    gap: vh * 2,
  },
  label: {
    textAlign: 'center',
  },
});
