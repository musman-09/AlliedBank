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
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const fetchLeaves = async () => {
    try {
      setLoading(true);
      const res = await get(endpoints.leaves.getPendingLeaves);

      const formatted = res.data?.map(item => [
        { label: 'Leave Type', value: item?.leaveType ?? '--' },
        { label: 'Leave ID', value: item?.leaveId ?? '--' },
        { label: 'Leave From', value: item?.leaveFrom ?? '--' },
        { label: 'Leave To', value: item?.leaveTo ?? '--' },
        { label: 'Status', value: item?.status ?? '--' },
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

      <ScrollView>
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
            <Loader />
          ) : activeTab === 'Claims' ? (
            claimsData.length === 0 ? (
              <RobotoBold
                style={styles.loaderContainer}
                name={'No pending claims'}
              />
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
