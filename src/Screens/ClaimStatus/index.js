import { View, Text, Image, ScrollView } from 'react-native';
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


const ClaimStatus = () => {


  const [claimsTableData , setClaimsTableData] = useState("")
const getClaimsData = async () => {
    try {
      const res = await get(endpoints.claims.getPendingClaims);
      console.log(res, 'response of claimm');


      const apiData = res?.data || [];

      console.log(apiData , "pplllllllllllllllll")


      const formattedData = apiData.map(item => [
        { label: 'Claim Type', value: item.claimType },
        { label: 'Claim Number', value: item.claimNumber },
        { label: 'Claim Date', value: item.claimDate.split('T')[0] },
        { label: 'Claim Status', value: item.claimStatus },
        { label: 'Claim Amount', value: item.claimAmount.toString() },
     
      ]);

      setClaimsTableData(formattedData);
    } catch (error) {
      console.log('Error fetching claims:', error);
    }
  };

  useEffect(() => {
    getClaimsData();
  }, []);


  console.log(claimsTableData  , "asdppppppppppppppp")
 

  const claimsData = [
    [
      { label: 'status', value: 'Pending' },

      { label: 'Claim Type:', value: '12/23/2223' },
      {
        label: 'Claim Number',
        value: '12/23/2332',
      },
      { label: 'Claim Date', value: '12/12/2223' },
      { label: 'Claim Status', value: 'Pending' },
      { label: 'Claim Amount', value: '232323' },
    ],
    [
      { label: 'status', value: 'Pending' },

      { label: 'Claim Type:', value: '12/23/2223' },
      {
        label: 'Claim Number',
        value: '12/23/2332',
      },
      { label: 'Claim Date', value: '12/12/2223' },
      { label: 'Claim Status', value: 'Pending' },
      { label: 'Claim Amount', value: '232323' },
    ],
    [
      { label: 'status', value: 'Pending' },

      { label: 'Claim Type:', value: '12/23/2223' },
      {
        label: 'Claim Number',
        value: '12/23/2332',
      },
      { label: 'Claim Date', value: '12/12/2223' },
      { label: 'Claim Status', value: 'Pending' },
      { label: 'Claim Amount', value: '232323' },
    ],
    [
      { label: 'status', value: 'Approved' },

      { label: 'Claim Type:', value: '12/23/2223' },
      {
        label: 'Claim Number',
        value: '12/23/2332',
      },
      { label: 'Claim Date', value: '12/12/2223' },
      { label: 'Claim Status', value: 'Approved' },
      { label: 'Claim Amount', value: '232323' },
    ],
  ];

  const barData = [
    {
      value: 40,
      label: 'Jan',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 20, frontColor: COLORS.blue },
    {
      value: 50,
      label: 'Feb',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 40, frontColor: COLORS.blue },
    {
      value: 75,
      label: 'Mar',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 25, frontColor: COLORS.blue },
    {
      value: 30,
      label: 'Apr',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 20, frontColor: COLORS.blue },
    {
      value: 60,
      label: 'May',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 40, frontColor: COLORS.blue },
    {
      value: 65,
      label: 'Jun',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: COLORS.orange,
    },
    { value: 30, frontColor: COLORS.blue },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Claim Status'} />

      <ScrollView>
        <CurvedView>
          <View style={styles.curvedViewContent}>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.crowselBar}>
                <Image style={styles.crowseIcon} source={icons.leftArrow} />

                <RobotoBold name={'Medical Claim'} />

                <Image style={styles.crowseIcon} source={icons.rightArrow} />
              </View>
            </View>

            <BarGraph data={barData} />

            <Table data={claimsData} />
          </View>
        </CurvedView>
      </ScrollView>
    </View>
  );
};

export default ClaimStatus;
