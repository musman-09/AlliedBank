import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import { styles } from './style';
import PieChart from '../../Components/pieChart';
import RobotoBold from '../../Components/RobotoBold';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';
import LinearGradient from 'react-native-linear-gradient';
import Table from '../../Components/Table';

import endpoints from '../../apis/endpoints';
import { useFocusEffect } from '@react-navigation/native';
import { get } from '../../apis';
import Loader from '../../Components/Loader';

const LeaveManagement = () => {
  const [leavesTableData, setLeavesTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLeavesTableData = async () => {
    try {
      setLoading(true);
      const res = await get(endpoints.leaves.getPendingLeaves);
      console.log(res, 'full response');

      const apiData = res?.data || [];

      const formattedData = apiData.map(item => [
        { label: 'status', value: item?.leaveStatus || 'Pending' },
        { label: 'Start Date:', value: item?.startDate.split("T")[0] || 'N/A' },
        { label: 'End Date', value: item?.endDate.split("T")[0] || 'N/A' },
        { label: 'Leaves:', value: item?.totalLeaves || '0' },
      ]);

      setLeavesTableData(formattedData);
    } catch (error) {
      console.log('Error fetching leaves:', error);
    } finally {
      setLoading(false);
    }
  };

  const data = [
    { value: 50, color: COLORS.blue },
    { value: 50, color: COLORS.green },
  ];

  useEffect(() => {
    getLeavesTableData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Leave Management'} />

      <ScrollView>
        <CurvedView>
          {loading ? (
            <Loader containerStyle={styles.loadercontainer} />
          ) : (
            <>
              {' '}
              <View style={styles.graphContainer}>
                <PieChart data={data} chartLabel={'Privelege Leaves'} />
                <PieChart data={data} chartLabel={'Casual Leaves'} />
              </View>
              <View style={{ marginTop: vh * 3, alignItems: 'center' }}>
                <View style={styles.barIdentifier}>
                  <View style={styles.legendItem}>
                    <LinearGradient
                      colors={COLORS.greenRadient}
                      style={styles.dot}
                    />
                    <RobotoBold name={'Approve'} style={{ fontSize: vw * 3 }} />
                  </View>
                  <View style={styles.legendItem}>
                    <LinearGradient
                      colors={COLORS.blueRadient}
                      style={styles.dot}
                    />
                    <RobotoBold name={'Balance'} style={{ fontSize: vw * 3 }} />
                  </View>
                </View>
              </View>
              <View style={styles.table}>

                
                <Table data={leavesTableData} />
              </View>{' '}
            </>
          )}
        </CurvedView>
      </ScrollView>
    </View>
  );
};

export default LeaveManagement;
