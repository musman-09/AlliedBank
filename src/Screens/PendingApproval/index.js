import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './style';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import Tabs from '../../Components/Tabs';
import ClaimsCard from '../../Components/ClaimsCard';

const PendingApproval = () => {
  return (
    <View style={styles.container}>
      <Header />

      <TopView name={'Pending Approval'} />
      <CurvedView>
        <View style={styles.tabsContainer}>
          <Tabs name={'Leaves'} />
        </View>

        <ClaimsCard
          claimEndType={'To'}
          claimType={'From'}
          dateType={'Request Date'}
          name={'Salman Tahir - 1001'}
          type={'Type : Casual Leave'}
        />
        <ClaimsCard
          claimEndType={'To'}
          claimType={'From'}
          dateType={'Request Date'}
          name={'Salman Tahir - 1001'}
          type={'Type : Casual Leave'}
        />
        <ClaimsCard
          claimEndType={'To'}
          claimType={'From'}
          dateType={'Request Date'}
          name={'Salman Tahir - 1001'}
          type={'Type : Casual Leave'}
        />
      </CurvedView>
    </View>
  );
};

export default PendingApproval;
