import { View, Text } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import { styles } from './style';
import PieChart from '../../Components/pieChart'

const LeaveManagement = () => {

  const data = [
        {value: 70, color: '#177AD5'},
        {value: 30, color: 'lightgray'}
    ];

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Leave Management'} />

      <CurvedView>




        <View> 


          <View style={styles.graphContainer}> 


          
<PieChart data ={data} />
<PieChart data ={data} />
</View>



        </View>
      </CurvedView>
    </View>
  );
};

export default LeaveManagement;
