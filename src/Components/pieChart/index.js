import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { vh, vw } from '../../Assets/themes/dimension';
import RobotoBold from '../RobotoBold';
import RobotoRegular from '../RobotoRegular';
import { fonts } from '../../Assets/fonts';

const pieChart = ({ data, chartLabel, approve, balance }) => {
  return (
    <View style={styles.container}>
      <RobotoBold style={styles.label} name={chartLabel} />
      <PieChart
        donut
        radius={70}
        innerRadius={45}
        data={data}
        centerLabelComponent={() => {
          return <RobotoRegular style={{fontSize :vw*3 }} name={`${approve} / ${balance}`} />;
        }}
      />
    </View>
  );
};

export default pieChart;

const styles = StyleSheet.create({
  container: {
    // borderWidth:2,
    gap: vh * 2,
  },
  label: {
    textAlign: 'center',
  },
  barIdentifier: {
    flexDirection: 'row',

    width: '60%',
    gap: vw * 1.2,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
});
