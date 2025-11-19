import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import RobotoBold from '../RobotoBold';
import { COLORS } from '../../Assets/themes/color';
import { vh, vw } from '../../Assets/themes/dimension';
import RobotoRegular from '../RobotoRegular';

const DisplayTable = ({ data, tableCellHeading }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.cellRowContainer}>
        <View style={styles.cellRow}>
          <RobotoRegular style={styles.row} name={item?.payMonth} />
        </View>

        <View style={styles.cellRow}>
          <RobotoRegular style={styles.row} name={item?.paymentDate} />
        </View>
        <View style={styles.cellRow}>
          <RobotoRegular style={styles.row} name={item?.installationAmount} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.cellHeadingContainer}>
            <View style={styles.cellHeading}>
              <RobotoBold style={styles.heading} name={tableCellHeading[0]} />
            </View>

            <View style={styles.cellHeading}>
              <RobotoBold style={styles.heading} name={tableCellHeading[1]} />
            </View>

            <View style={styles.cellHeading}>
              <RobotoBold style={styles.heading} name={tableCellHeading[2]} />
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}

      />
    </View>
  );
};

export default DisplayTable;

const styles = StyleSheet.create({
  container: {},
  cellHeadingContainer: {
    flexDirection: 'row',
  },
  cellHeading: {
    backgroundColor: COLORS.orange,
    width: '33.4%',

    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vh,
  },
  cellRowContainer: {
    flexDirection: 'row',

    paddingVertical: vh,
    gap: vw,
  },
  cellRow: {
    width: '33.4%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: COLORS.white,
    // fontSize : vw*
  },
  row: {
    fontSize: vw * 4,
  },
});
