import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
// import { icons } from '../../Assets';

import RobotoBold from '../RobotoBold';
import { icons } from '../../Assets';

const EmployeeCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.left}>
          <Image source={icons.pdfIcon} />
          <RobotoBold name={'Employee Leave Policy'} />
        </View>

        <View style={styles.right}>
          <Image source={icons.calender} />
          <RobotoBold name={'Last Update'} />
        </View>
      </View>
    </View>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    flex: 1,
  },
});
