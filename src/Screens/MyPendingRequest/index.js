import { View, ScrollView } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import RobotoBold from '../../Components/RobotoBold';
import { styles } from './style';
import Tabs from '../../Components/Tabs';
import ClaimsCard from '../../Components/ClaimsCard';
import { endpoints } from '../../apis/endpoints';
import { get, post } from '../../apis/index';
import { useFocusEffect } from '@react-navigation/native';
import Loader from '../../Components/Loader';
import moment from 'moment';
import { COLORS } from '../../Assets/themes/color';
import NoDataFound from '../../Components/NoDataFound';

const MyPendingRequest = () => {
  const [activeTab, setActiveTab] = useState('Claims');
  const [loading, setLoading] = useState(false);
  const [leavesData, setLeavesData] = useState([]);
  const [claimsData, setClaimsData] = useState([]);

  console.log('component rendering .. ');

  const fetchClaims = async () => {
    try {
      setLoading(true);

      const res = await get(endpoints.claims.getPendingClaims);

      const formatted = res.data?.map(item => [
        { label: 'Claim Type', value: item?.claimType ?? '--' },
        { label: 'Claim Number', value: item?.claimNumber ?? '--' },
        {
          label: 'Claim Date',
          value: item?.claimDate
            ? moment(item.claimDate).format('DD-MMM-YYYY')
            : '--',
        },
        { label: 'Claim Source', value: item?.claimSource ?? '--' },
        { label: 'Claim Amount', value: `PKR ${item?.claimAmount ?? '--'}` },
      ]);

      setClaimsData(formatted ?? []);
      setClaimsData([]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const fetchLeaves = async () => {
    try {
      setLoading(true);
      const res = await get(endpoints.leaves.getPendingLeaves);

      console.log(res, 'leaves response . . . . .');

      const formatted = res.data?.map(item => [
        { label: 'Full Name', value: item?.fullName ?? '--' },
        { label: 'Type', value: item?.leaveType ?? '--' },
        {
          label: 'Requested Date',
          value: item?.requestedDate
            ? moment(item?.requestedDate).format('DD-MMM-YYYY')
            : '--',
        },
        {
          label: 'From',
          value: item?.startDate
            ? moment(item?.startDate).format('DD-MMM-YYYY')
            : '--',
        },
        {
          label: 'To',
          value: item?.endDate
            ? moment(item?.endDate).format('DD-MMM-YYYY')
            : '--',
        },
      ]);

      setLeavesData(formatted ?? []);
    } catch (error) {
      console.log('Error from leaves api', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (activeTab === 'Claims') {
        fetchClaims();
      } else {
        fetchLeaves();
      }
    }, [activeTab]),
  );

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView style={{ backgroundColor: COLORS.white }}>
        <TopView name={'My pending Request'} />

        <CurvedView>
          <View style={styles.tabsContainer}>
            <Tabs
              isActive={activeTab === 'Claims'}
              container={activeTab}
              onPress={() => setActiveTab('Claims')}
              name={'Claims'}
            />
            <Tabs
              isActive={activeTab === 'Leaves'}
              onPress={() => setActiveTab('Leaves')}
              name={'Leaves'}
            />
          </View>
          {loading ? (
            <Loader containerStyle={styles.loadercontainer} />
          ) : activeTab === 'Claims' ? (
            claimsData.length === 0 ? (
              <NoDataFound title={'No Claims Found'} />
            ) : (
              claimsData.map((card, index) => (
                <ClaimsCard key={index} data={card} />
              ))
            )
          ) : leavesData.length === 0 ? (
            <RobotoBold
              style={styles.loaderContainer}
              name={'No pending leaves'}
            />
          ) : (
            leavesData.map((card, index) => (
              <ClaimsCard key={index} data={card} />
            ))
          )}
        </CurvedView>
      </ScrollView>
    </View>
  );
};

export default MyPendingRequest;
