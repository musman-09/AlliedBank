import { View, Text } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';

const pieChart = ({ data }) => {
  return (
    <View>
      <PieChart
        donut
        radius={80}
        innerRadius={50}
        data={data}
        centerLabelComponent={() => {
          return <Text style={{ fontSize: 30 }}>70%</Text>;
        }}
      />
    </View>
  );
};

export default pieChart;
