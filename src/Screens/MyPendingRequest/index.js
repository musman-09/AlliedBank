import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import RobotoBold from '../../Components/RobotoBold';
import { styles } from './style';
import Tabs from '../../Components/Tabs';
import ClaimsCard from '../../Components/ClaimsCard';

const MyPendingRequest = () => {
  const [activeTab, setActiveTab] = useState('Claims');

  const onPressTab = () => {
    setActiveTab(!activeTab);
  };
  return (
    <View style={styles.container}>
      <Header />

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

        <ClaimsCard
          claimEndType={'Claim Amount'}
          claimType={'Claim Source'}
          dateType={'Claim Date'}
          name={'Salman Tahir - 1001'}
          type={'Claim Number'}
        />
      </CurvedView>
    </View>
  );
};

export default MyPendingRequest;
