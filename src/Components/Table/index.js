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

  const selectedTabData = data.filter(
    (item, index) => item.status === selected,
  );

  console.log(selectedTabData, 'usman');

  const renderItem = ({ item, index }) => {
    console.log(item, 'item');

    return (
      <View style={styles.row}>
        <View key={index} style={styles.cell}>
          <View
            style={
              item?.status === 'Pending'
                ? styles.orangeCircle
                : item?.status === 'Approved'
                ? styles.greenCircle
                : styles.redCircle
            }
          />
          <RobotoBold style={styles.label} name={'Claim Type'} />
          <RobotoRegular style={styles.value} name={item?.type} />
        </View>

        <View key={index} style={styles.cell}>
          <RobotoBold style={styles.label} name={'Claim Number'} />
          <RobotoRegular style={styles.value} name={item?.id} />
        </View>

        <View key={index} style={styles.cell}>
          <RobotoBold style={styles.label} name={'Claim Date'} />
          <RobotoRegular style={styles.value} name={item?.date} />
        </View>

        <View style={styles.horizontalBar} />

        <View key={index} style={styles.cell}>
          <RobotoBold style={styles.label} name={'Claim Status'} />

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={
                item?.status === 'Pending'
                  ? styles.orangeDot
                  : item?.status === 'Approved'
                  ? styles.greenDot
                  : styles.redDot
              }
            />
            <RobotoRegular style={styles.value} name={item?.status} />
          </View>
        </View>

        <View key={index} style={styles.cell}>
          <RobotoBold style={styles.label} name={'Claim Amount'} />
          <RobotoRegular style={styles.value} name={item?.amount} />
        </View>

        <View style={styles.horizontalBar} />
      </View>
    );
  };
  console.log(selectedTabData, 'selected tab data');
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

      <FlatList
        data={selectedTabData}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: vh * 80 }}
      />
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  tableContainer: {},
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
    // borderBottomWidth: 1,

    paddingVertical: vh * 1.2,
  },
  cell: {
    width: '33.3%',
    paddingVertical: vh * 1,
    justifyContent: 'center',
    // backgroundColor: "yellow"
  },
  label: {},
  value: {
    fontSize: vw * 3.5,
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
