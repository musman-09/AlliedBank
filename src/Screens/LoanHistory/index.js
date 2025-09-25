import { View, Text } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
// import { styles } from '../Home/style'
import { styles } from './style';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import BarGraph from '../../Components/BarGraph';
import { COLORS } from '../../Assets/themes/color';
import RobotoBold from '../../Components/RobotoBold';
import Tabs from '../../Components/Tabs';

const LoanHistory = () => {
  const barData = [
    {
      value: 40,
      label: '',
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

      <TopView name={'Active Loans'} />

      <CurvedView>
        <View style={styles.graphContainer}>
          <BarGraph data={barData} />
        </View>

        <RobotoBold name={'Loan History'} />

        <View style={styles.tabsContainer}> 
<Tabs name={"House Building"} container={styles.tabContainer} labelStyle = {styles.labelStyle}/>
<Tabs name={"House Finance"} container={styles.tabContainer} labelStyle = {styles.labelStyle}/>
<Tabs name={"Personal Finance"} container={styles.tabContainer} labelStyle = {styles.labelStyle}/>
<Tabs name={"Care Ijara"} container={styles.tabContainer} labelStyle = {styles.labelStyle}/>
<Tabs name={"Care Lease"} container={styles.tabContainer} labelStyle = {styles.labelStyle}/>
        </View>
      </CurvedView>
    </View>
  );
};

export default LoanHistory;
