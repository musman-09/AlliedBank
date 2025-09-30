import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import RobotoBold from '../../Components/RobotoBold';
import { styles } from './style';
import Tabs from '../../Components/Tabs';
import ClaimsCard from '../../Components/ClaimsCard';
import { vw } from '../../Assets/themes/dimension';
import { endpoints } from '../../apis/endpoints';
import { get, post } from '../../apis/index';

const MyPendingRequest = () => {
  const [activeTab, setActiveTab] = useState('Claims');
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(cards, 'data');
  // const cards = [
  //   {
  //     claimSource: '09/04/23',
  //     claimDate: '23/24/2222',
  //     claimAmount: '23/23/2323',
  //   },
  //   {
  //     claimSource: '09/04/23',
  //     claimDate: '23/24/2222',
  //     claimAmount: '23/23/2323',
  //   },
  //   {
  //     claimSource: '09/04/23',
  //     claimDate: '23/24/2222',
  //     claimAmount: '23/23/2323',
  //   },
  //   {
  //     claimSource: '09/04/23',
  //     claimDate: '23/24/2222',
  //     claimAmount: '23/23/2323',
  //   },
  //   {
  //     claimSource: '09/04/23',
  //     claimDate: '23/24/2222',
  //     claimAmount: '23/23/2323',
  //   },
  // ];

  const fetchClaims = async () => {
    try {
      setLoading(true);
      const res = await post(endpoints.approval.processRequest);
      console.log(res.data, 'resssponsesee');
      setCards(res.data ?? []);
    } catch (error) {
      console.log('Error from api', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClaims();
  }, []);

  // const onPressTab = () => {
  //   setActiveTab(!activeTab);
  // };

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
            <RobotoBold name={'Loading'} />
          ) : cards.length === 0 ? (
            <RobotoBold name={'No pending requests'} />
          ) : (
            cards?.map((item, index) => (
              <ClaimsCard
                key={index}
                claimEndType={'Claim Amount'}
                claimType={'Claim Date'}
                dateType={item?.claimDate}
                name={item?.employeeName ?? 'Unknown'}
                type={item?.claimSource}
              />
            ))
          )}
        </CurvedView>
      </ScrollView>
    </View>
  );
};

export default MyPendingRequest;
