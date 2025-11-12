import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
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
import { get } from '../../apis';
import Loader from '../../Components/Loader';
import { icons } from '../../Assets';
import { useNavigation } from '@react-navigation/native';

const LeaveManagement = () => {
  const navigation = useNavigation();
  const [leavesTableData, setLeavesTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [casualLeavesData, setCasualLeavesData] = useState([
    { value: 50, color: COLORS.blue },
    { value: 50, color: COLORS.green },
  ]);
  const [privilegeLeavesData, setPrivilegeLeavesData] = useState([
    { value: 50, color: COLORS.blue },
    { value: 50, color: COLORS.green },
  ]);

  const [casualStatusCount, setCasualStatusCount] = useState({
    approve: 0,
    pending: 0,
  });
  const [privilegeStatusCount, setPrivilegeStatusCount] = useState({
    approve: 0,
    pending: 0,
  });

  const getLeavesTableData = async () => {
    try {
      setLoading(true);
      const res = await get(endpoints.leaves.getPendingLeaves);

      const apiData = res?.data || [];

      const casualLeaves = apiData.filter(
        item => item.leaveType?.toLowerCase() === 'casual leave',
      );

      const privilegeLeaves = apiData.filter(
        item =>
          item.leaveType?.toLowerCase() === 'privilege leave' ||
          item.leaveType?.toLowerCase() === 'hajj leave',
      );

      const casualStatus = casualLeaves.reduce(
        (acc, item) => {
          if (item.leaveStatus?.toLowerCase() === 'approved')
            acc.approve += item.leaveDays || 0;
          else acc.pending += item.leaveDays || 0;
          return acc;
        },
        { approve: 0, pending: 0 },
      );

      const privilegeStatus = privilegeLeaves.reduce(
        (acc, item) => {
          if (item.leaveStatus?.toLowerCase() === 'approved')
            acc.approve += item.leaveDays || 0;
          else acc.pending += item.leaveDays || 0;
          return acc;
        },
        { approve: 0, pending: 0 },
      );

      setCasualStatusCount(casualStatus);
      setPrivilegeStatusCount(privilegeStatus);

      setCasualLeavesData([
        { value: casualStatus.approve, color: COLORS.green },
        { value: casualStatus.pending, color: COLORS.blue },
      ]);

      setPrivilegeLeavesData([
        { value: privilegeStatus.approve, color: COLORS.green },
        { value: privilegeStatus.pending, color: COLORS.blue },
      ]);

      const formattedData = apiData.map(item => [
        { label: 'status', value: item?.leaveStatus || 'Pending' },
        { label: 'Start Date:', value: item?.startDate.split('T')[0] || 'N/A' },
        { label: 'End Date', value: item?.endDate.split('T')[0] || 'N/A' },
        { label: 'Leaves:', value: item?.totalLeaves || '0' },
      ]);

      setLeavesTableData(formattedData);
    } catch (error) {
      console.log('Error fetching leaves:', error);
    } finally {
      setLoading(false);
    }
  };

  const onPressAdd = to => {
    navigation.navigate(to);
  };

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
              <View style={styles.graphContainer}>
                <PieChart
                  data={privilegeLeavesData}
                  chartLabel={'Privilege Leaves'}
                  approve={privilegeStatusCount.approve}
                  balance={privilegeStatusCount.pending}
                />
                <PieChart
                  data={casualLeavesData}
                  chartLabel={'Casual Leaves'}
                  approve={casualStatusCount.approve}
                  balance={casualStatusCount.pending}
                />
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
              </View>

              <TouchableOpacity onPress={() => onPressAdd('NewLeaveRequest')}>
                <Image source={icons.plus} style={styles.plusIcon} />
              </TouchableOpacity>
            </>
          )}
        </CurvedView>
      </ScrollView>
    </View>
  );
};

export default LeaveManagement;
