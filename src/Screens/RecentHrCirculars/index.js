import { View, Text } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
// import Header from '../../../AlliedBank/src/Components/Header';
import { styles } from './style';
import EmployeeCard from '../../Components/EmployeeCard';

const RecentHrCirculars = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Recent Hr Circulars'} />

      <CurvedView>

        <EmployeeCard />
       
      </CurvedView>
    </View>
  );
};

export default RecentHrCirculars;
