import { View, Text, Image } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import { styles } from './style';
import { icons } from '../../Assets';
import RobotoBold from '../../Components/RobotoBold';

const ClaimStatus = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Claim Status'} />

      <CurvedView>
        <View style={styles.curvedViewContent}>
          <View style={{ alignItems:"center"}}>
            <View style={styles.crowselBar}>
              <Image style={styles.crowseIcon} source={icons.leftArrow} />

              <RobotoBold name={'Medical Claim'} />

              <Image style={styles.crowseIcon} source={icons.rightArrow} />
            </View>
          </View>
        </View>
      </CurvedView>
    </View>
  );
};

export default ClaimStatus;
