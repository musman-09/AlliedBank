import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import Select from '../../Components/Select';
import PaySlipCard from '../PaySlip/component/PaySlip';

const PaySlip = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const selectYears = ['2024', '2023', '2022', '2021', '2020'];
  const selectMonths = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
  ];
  return (
    <View style={styles.container}>
      <Header />

      <TopView name={'Pay Slip'} />

      <CurvedView>
        <View style={styles.curvedViewContainer}>
          <Select
            label="Select Year"
            placeholder="-- Select Year --"
            options={selectYears}
            onSelectOption={setSelectedYear}
          />

          <Select
            label="Select Year"
            placeholder="-- Select Month --"
            options={selectMonths}
            onSelectOption={setSelectedMonth}
          />

          {selectedYear && selectedMonth && (
            <View style={{ marginTop: 20 }}>
              <PaySlipCard year={selectedYear} month={selectedMonth} />
            </View>
          )}
        </View>
      </CurvedView>
    </View>
  );
};

export default PaySlip;
