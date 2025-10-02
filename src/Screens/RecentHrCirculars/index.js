import { View, Text, FlatList } from 'react-native';
import React, { useCallback, useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';

import { styles } from './style';
import EmployeeCard from '../../Components/EmployeeCard';
import { useFocusEffect } from '@react-navigation/native';
import { get } from '../../apis';
import endpoints from '../../apis/endpoints';
import { vh, vw } from '../../Assets/themes/dimension';
import moment from 'moment';

const RecentHrCirculars = () => {
  const [hrCircularsData, setHrCircularData] = useState([]);

  console.log(hrCircularsData, 'hr cirular data ..');

  const fetchHrCirculars = async () => {
    try {
      const res = await get(endpoints.general.getLinks);

      console.log(res, 'response of hr circualrs');
      const formatted = res.data.useFullLinks?.map(item => ({
        title: item?.linkName ?? '--',
        description: item?.description ?? '--',
        url: item?.linkUrl ?? '--',
        createdOn: item?.createdOn
          ? moment(item?.createdOn).format('DD-MMM-YYYY')
          : '--',
      }));

      setHrCircularData(formatted);
    } catch (error) {
      console.log('Error fetching HR circulars:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchHrCirculars();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Recent Hr Circulars'} />

      <CurvedView>
        <FlatList
          data={hrCircularsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <EmployeeCard data={item} />}
          contentContainerStyle={{ gap: vh * 2 }}
        />
      </CurvedView>
    </View>
  );
};

export default RecentHrCirculars;
