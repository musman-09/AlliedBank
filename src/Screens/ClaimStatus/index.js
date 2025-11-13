import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import { styles } from './style';
import { icons } from '../../Assets';
import RobotoBold from '../../Components/RobotoBold';
import BarGraph from '../../Components/BarGraph';
import Table from '../../Components/Table';
import { COLORS } from '../../Assets/themes/color';
import endpoints from '../../apis/endpoints';
import { get } from '../../apis';
import Loader from '../../Components/Loader';

const ClaimStatus = () => {
  const [loading, setLoading] = useState(false);
  const [claimsTableData, setClaimsTableData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const claimTypes = ['Medical Claim', 'Travel Claim'];

  const selectedCarousel = claimTypes[selectedIndex];

  const getClaimsData = async () => {
    try {
      setLoading(true);
      const res = await get(endpoints.claims.getPendingClaims);

      const apiData = res?.data || [];

      const formattedData = apiData.map(item => [
        { label: 'status', value: item.claimStatus },
        { label: 'Claim Type', value: item.claimType },
        { label: 'Claim Number', value: item.claimNumber },
        { label: 'Claim Date', value: item.claimDate.split('T')[0] },
        { label: 'Claim Status', value: item.claimStatus },
        { label: 'Claim Amount', value: item.claimAmount },
      ]);

      setClaimsTableData(formattedData);
    } catch (error) {
      console.log('Error fetching claims:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMedicalClaimsData = async () => {
    try {
      setLoading(true);
      const res = await get(endpoints.claims.medicalClaims);
      const apiData = res?.data || [];

      const monthlyData = {};

      apiData.forEach(item => {
        const date = new Date(item.claimDate);
        const month = date.getMonth();
        const monthName = date.toLocaleString('default', { month: 'short' });

        if (!monthlyData[monthName]) {
          monthlyData[monthName] = { claimAmount: 0, reimbursedAmount: 0 };
        }

        monthlyData[monthName].claimAmount += item.claimAmount;
        monthlyData[monthName].reimbursedAmount += item.reimbursedAmount;
      });

      const formattedBarData = [];
      Object.keys(monthlyData).forEach(month => {
        const { claimAmount, reimbursedAmount } = monthlyData[month];

        formattedBarData.push({
          value: claimAmount,
          label: month,
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: { color: 'gray' },
          frontColor: COLORS.orange,
        });

        formattedBarData.push({
          value: reimbursedAmount,
          frontColor: COLORS.blue,
        });
      });

      setBarData(formattedBarData);
    } catch (error) {
      console.log('Error fetching medical claims:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTravelClaimsData = async () => {
    try {
      setLoading(true);
      const res = await get(endpoints.claims.travelClaims);
      const apiData = res?.data || [];
      const monthlyData = {};
      apiData.forEach(item => {
        const date = new Date(item.claimDate);
        const month = date.getMonth();
        const monthName = date.toLocaleString('default', { month: 'short' });

        if (!monthlyData[monthName]) {
          monthlyData[monthName] = { claimAmount: 0, reimbursedAmount: 0 };
        }

        monthlyData[monthName].claimAmount += item.claimAmount;
        monthlyData[monthName].reimbursedAmount += item.reimbursedAmount;
      });

      const formattedBarData = [];
      Object.keys(monthlyData).forEach(month => {
        const { claimAmount, reimbursedAmount } = monthlyData[month];

        formattedBarData.push({
          value: claimAmount,
          label: month,
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: { color: 'gray' },
          frontColor: COLORS.orange,
        });

        formattedBarData.push({
          value: reimbursedAmount,
          frontColor: COLORS.blue,
        });
      });

      setBarData(formattedBarData);
    } catch (error) {
      console.log('Error fetching medical claims:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (selectedIndex < claimTypes.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else {
      setSelectedIndex(claimTypes.length - 1);
    }
  };

  useEffect(() => {
    if (selectedCarousel === 'Medical Claim') {
      getMedicalClaimsData();
    } else if (selectedCarousel === 'Travel Claim') {
      getTravelClaimsData();
    }
    getClaimsData();
  }, [selectedCarousel]);

  // const barDataa = [
  //   {
  //     value: 9322,
  //     label: 'Jan',
  //     spacing: 2,
  //     labelWidth: 30,
  //     labelTextStyle: { color: 'gray' },
  //     frontColor: COLORS.orange,
  //   },

  //   { value: 20, frontColor: COLORS.blue },

  //   {
  //     value: 50,
  //     label: 'Feb',
  //     spacing: 2,
  //     labelWidth: 30,
  //     labelTextStyle: { color: 'gray' },
  //     frontColor: COLORS.orange,
  //   },
  //   { value: 40, frontColor: COLORS.blue },
  //   {
  //     value: 75,
  //     label: 'Mar',
  //     spacing: 2,
  //     labelWidth: 30,
  //     labelTextStyle: { color: 'gray' },
  //     frontColor: COLORS.orange,
  //   },
  //   { value: 25, frontColor: COLORS.blue },
  //   {
  //     value: 30,
  //     label: 'Apr',
  //     spacing: 2,
  //     labelWidth: 30,
  //     labelTextStyle: { color: 'gray' },
  //     frontColor: COLORS.orange,
  //   },
  //   { value: 20, frontColor: COLORS.blue },
  //   {
  //     value: 60,
  //     label: 'May',
  //     spacing: 2,
  //     labelWidth: 30,
  //     labelTextStyle: { color: 'gray' },
  //     frontColor: COLORS.orange,
  //   },
  //   { value: 40, frontColor: COLORS.blue },
  //   {
  //     value: 65,
  //     label: 'Jun',
  //     spacing: 2,
  //     labelWidth: 30,
  //     labelTextStyle: { color: 'gray' },
  //     frontColor: COLORS.orange,
  //   },
  //   { value: 30, frontColor: COLORS.blue },
  // ];

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Claim Status'} />


        <CurvedView>
          {loading ? (
            <Loader containerStyle={styles.loadercontainer} />
          ) : (
            <View style={styles.curvedViewContent}>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.crowselBar}>
                  <TouchableOpacity onPress={handlePrev}>
                    <Image
                      style={styles.crowseIcon}
                      source={icons.leftArrow}
                      onTouchEnd={handlePrev}
                    />
                  </TouchableOpacity>

                  <RobotoBold name={selectedCarousel} />

                  <TouchableOpacity onPress={handleNext}>
                    <Image
                      style={styles.crowseIcon}
                      source={icons.rightArrow}
                      onTouchEnd={handleNext}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <BarGraph data={barData} />

              <Table data={claimsTableData} />
            </View>
          )}
        </CurvedView>
      
    </View>
  );
};

export default ClaimStatus;
