import { View, Text, Image } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import { styles } from './style';
import { icons } from '../../Assets';
import RobotoBold from '../../Components/RobotoBold';
import BarGraph from '../../Components/BarGraph';
import Table from '../../Components/Table';
import { COLORS } from '../../Assets/themes/color';

const ClaimStatus = () => {
  const claimsData = [
    {
      id: '000245109',
      type: 'OPD',
      status: 'Pending',
      amount: 40000,
      date: '2024-01-03',
    },
    {
      id: '000245108',
      type: 'OPD',
      status: 'Pending',
      amount: 10000,
      date: '2024-02-07',
    },
    {
      id: '000245200',
      type: 'IPD',
      status: 'Approved',
      amount: 55000,
      date: '2024-01-15',
    },
    {
      id: '000245300',
      type: 'OPD',
      status: 'Rejected',
      amount: 15000,
      date: '2024-02-20',
    },

    {
      id: '000245109',
      type: 'OPD',
      status: 'Pending',
      amount: 40000,
      date: '2024-01-03',
    },
    {
      id: '000245108',
      type: 'OPD',
      status: 'Pending',
      amount: 10000,
      date: '2024-02-07',
    },
    {
      id: '000245200',
      type: 'IPD',
      status: 'Approved',
      amount: 55000,
      date: '2024-01-15',
    },
    {
      id: '000245300',
      type: 'OPD',
      status: 'Rejected',
      amount: 15000,
      date: '2024-02-20',
    },

    {
      id: '000245109',
      type: 'OPD',
      status: 'Pending',
      amount: 40000,
      date: '2024-01-03',
    },
    {
      id: '000245108',
      type: 'OPD',
      status: 'Pending',
      amount: 10000,
      date: '2024-02-07',
    },
    {
      id: '000245200',
      type: 'IPD',
      status: 'Approved',
      amount: 55000,
      date: '2024-01-15',
    },
    {
      id: '000245300',
      type: 'OPD',
      status: 'Rejected',
      amount: 15000,
      date: '2024-02-20',
    },
  ];

  const barData = [
    {
      value: 40,
      label: 'Jan',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 20, frontColor: COLORS.blue },
    {
      value: 50,
      label: 'Feb',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 40, frontColor: COLORS.blue },
    {
      value: 75,
      label: 'Mar',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 25, frontColor: COLORS.blue },
    {
      value: 30,
      label: 'Apr',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 20, frontColor: COLORS.blue },
    {
      value: 60,
      label: 'May',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 40, frontColor: COLORS.blue },
    {
      value: 65,
      label: 'Jun',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 30, frontColor: COLORS.blue },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Claim Status'} />

      <CurvedView>
        <View style={styles.curvedViewContent}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.crowselBar}>
              <Image style={styles.crowseIcon} source={icons.leftArrow} />

              <RobotoBold name={'Medical Claim'} />

              <Image style={styles.crowseIcon} source={icons.rightArrow} />
            </View>
          </View>

          <BarGraph data={barData} />

          <Table data={claimsData} />
        </View>
      </CurvedView>
    </View>
  );
};

export default ClaimStatus;
