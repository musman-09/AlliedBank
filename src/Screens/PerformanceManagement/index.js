import { View, Text } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import { styles } from './style';
import Select from '../../Components/Select';

const PerformanceManagement = () => {
  const selectYears = ['2024', '2023', '2022', '2021', '2020'];
  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Performance Management'} />

      <CurvedView>
        <View style={styles.curvedViewContent}>
          <Select
            label={'Select Fiscal Year'}
            placeholder={'-- Select Year --'}
            options={selectYears}
          />
        </View>
      </CurvedView>
    </View>
  );
};

export default PerformanceManagement;
