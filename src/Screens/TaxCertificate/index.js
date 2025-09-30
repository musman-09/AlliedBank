import { View, Text } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';

const TaxCertificate = () => {
  return (
    <View>
      <Header />
      <TopView />

      <CurvedView>
        <View></View>
      </CurvedView>
    </View>
  );
};

export default TaxCertificate;
