import { View, Text } from 'react-native';
import React from 'react';
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

const LeaveManagement = () => {
  const leaveManagementData = [
    [
      { label: 'status', value: 'Pending' },

      { label: 'Start Date:', value: '12/23/2223' },
      {
        label: 'End Date',
        value: '12/23/2332',
      },
      { label: 'Leaves:', value: '12/12/2223' },
    ],

    [
      { label: 'status', value: 'Approved' },
      { label: 'Start Date:', value: '12/23/2223' },
      {
        label: 'End Date',
        value: '12/23/2332',
      },
      { label: 'Leaves:', value: '12/12/2223' },
    ],

    [
      { label: 'status', value: 'Pending' },
      { label: 'Start Date:', value: '12/23/2223' },
      {
        label: 'End Date',
        value: '12/23/2332',
      },
      { label: 'Leaves:', value: '12/12/2223' },
    ],

    [
      { label: 'status', value: 'Pending' },
      { label: 'Start Date:', value: '12/23/2223' },
      {
        label: 'End Date',
        value: '12/23/2332',
      },
      { label: 'Leaves:', value: '12/12/2223' },
    ],
  ];
  const data = [
    { value: 50, color: COLORS.blue },
    { value: 50, color: COLORS.green },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Leave Management'} />

      <CurvedView>
        <View>
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

          <Table data={leaveManagementData} />
        </View>
      </CurvedView>
    </View>
  );
};

export default LeaveManagement;
