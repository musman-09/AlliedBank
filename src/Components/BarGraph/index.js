import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { BarChart } from 'react-native-gifted-charts';
import { vh, vw } from '../../Assets/themes/dimension';
import RobotoBold from '../RobotoBold';
import RobotoRegular from '../RobotoRegular';

const BarGraph = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingBottom: 40,
        borderRadius: 10,

        marginTop: vh * 2,
      }}
    >
      <BarChart
        data={data}
        barWidth={8}
        spacing={vw * 8}
        roundedTop
        roundedBottom
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{ color: 'gray' }}
        noOfSections={3}
        maxValue={75}
      />

      <View style={{ marginTop: vh * 1.5, alignItems: 'center' }}>
        <View style={styles.barIdentifier}>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: 'orange' }]} />
            <RobotoBold name={'Amount Claimed'} style={{ fontSize: vw * 3 }} />
          </View>

          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: 'navy' }]} />
            <RobotoBold style={{ fontSize: vw * 3 }} name={'Amount Approved'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BarGraph;

const styles = StyleSheet.create({
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
