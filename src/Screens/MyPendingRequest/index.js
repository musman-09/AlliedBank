import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import RobotoBold from '../../Components/RobotoBold';
import { styles } from './style';
import Tabs from '../../Components/Tabs';
import ClaimsCard from '../../Components/ClaimsCard';
import { vw } from '../../Assets/themes/dimension';


const MyPendingRequest = () => {
  const [activeTab, setActiveTab] = useState('Claims');

  const cards = [
    {
      claimSource: "09/04/23",
      claimDate: "23/24/2222",
      claimAmount: "23/23/2323"
    },
    {
      claimSource: "09/04/23",
      claimDate: "23/24/2222",
      claimAmount: "23/23/2323"
    }
    ,
    {
      claimSource: "09/04/23",
      claimDate: "23/24/2222",
      claimAmount: "23/23/2323"
    }
    ,
    {
      claimSource: "09/04/23",
      claimDate: "23/24/2222",
      claimAmount: "23/23/2323"
    },
    {
      claimSource: "09/04/23",
      claimDate: "23/24/2222",
      claimAmount: "23/23/2323"
    }
  ]



  const onPressTab = () => {
    setActiveTab(!activeTab);
  };
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


          {cards.map((item, index) => {
            return <ClaimsCard
              key={index}
              claimEndType={'Claim Amount'}
              claimType={'Claim Date'}
              dateType={item?.claimDate}
              name={'Salman Tahir - 1001'}
              type={item?.claimSource}
            />
          })}




        </CurvedView>
      </ScrollView>
    </View>
  );
};

export default MyPendingRequest;
