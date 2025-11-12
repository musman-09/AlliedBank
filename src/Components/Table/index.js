import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import RobotoBold from '../RobotoBold';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../Assets/themes/color';
import { vh, vw } from '../../Assets/themes/dimension';
import RobotoRegular from '../RobotoRegular';

const Table = ({ data }) => {
  const [selected, setSelected] = useState('Pending');

  const onPressTab = tab => {
    setSelected(tab);
  };

  const selectedTabData = data?.filter(row =>
    row?.some(obj => obj.label === 'status' && obj.value === selected),
  );

  const renderItem = ({ item }) => {
    const statusObj = item.find(obj => obj.label === 'status');
    const statusValue = statusObj?.value;

    const fields = item.filter(obj => obj.label !== 'status');

    return (
      <View style={styles.row}>
        {fields.map((field, index) => (
          <View key={index} style={styles.cell}>
            {index === 0 && (
              <>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={
                      statusValue === 'Pending'
                        ? styles.orangeCircle
                        : statusValue === 'Approved'
                        ? styles.greenCircle
                        : styles.redCircle
                    }
                  />

                  <RobotoBold name={statusValue} />
                </View>
              </>
            )}

            <RobotoBold style={styles.label} name={field.label} />
            <RobotoRegular style={styles.value} name={field.value} />
          </View>
        ))}

        {/* divider at bottom of each row */}
        <View style={styles.horizontalBar} />
      </View>
    );
  };

  return (
    <View style={styles.tableContainer}>
      <View style={styles.tabsContainer}>
        <LinearGradient
          style={styles.tabs}
          colors={
            selected === 'Pending' ? COLORS.tabsActiveColor : COLORS.tabsColor
          }
        >
          <TouchableOpacity onPress={() => onPressTab('Pending')}>
            <RobotoBold
              name={'Pending'}
              style={selected === 'Pending' && styles.tabName}
            />
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          style={styles.tabs}
          colors={
            selected === 'Approved' ? COLORS.tabsActiveColor : COLORS.tabsColor
          }
        >
          <TouchableOpacity onPress={() => onPressTab('Approved')}>
            <RobotoBold
              name={'Approved'}
              style={selected === 'Approved' && styles.tabName}
            />
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          style={styles.tabs}
          colors={
            selected === 'Rejected' ? COLORS.tabsActiveColor : COLORS.tabsColor
          }
        >
          <TouchableOpacity onPress={() => onPressTab('Rejected')}>
            <RobotoBold
              name={'Rejected'}
              style={selected === 'Rejected' && styles.tabName}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <FlatList data={selectedTabData} renderItem={renderItem} />
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  tableContainer: {
    // flex:1
  },
  tabsContainer: {
    flexDirection: 'row',
  },
  tabs: {
    width: '33.3%',
    paddingVertical: vh * 1.7,

    justifyContent: 'center',
    alignItems: 'center',
  },
  tableData: {
    width: '33.3%',
    paddingVertical: vh * 1.7,

    justifyContent: 'center',
    alignItems: 'center',
  },
  tabName: {
    color: COLORS.white,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    paddingVertical: vh * 1.2,
  },
  cell: {
    width: '33.3%',
    paddingVertical: vh * 1,

    alignItems: 'center',
  },
  label: {},
  value: {
    fontSize: vw * 3.5,

    textAlign: 'center',
  },
  horizontalBar: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: vh * 0.8,
  },
  orangeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
    backgroundColor: COLORS.orange,
  },
  greenDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
    backgroundColor: 'green',
  },
  redDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
    backgroundColor: 'red',
  },
  redCircle: {
    width: 18,
    height: 18,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: 'red',
  },
  greenCircle: {
    width: 18,
    height: 18,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: 'green',
  },
  orangeCircle: {
    width: 18,
    height: 18,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: COLORS.orange,
  },
});
