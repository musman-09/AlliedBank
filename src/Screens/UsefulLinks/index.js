import { View, Text, Image } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import { styles } from './style';
import CurvedView from '../../Components/CurvedView';
import RobotoRegular from '../../Components/RobotoRegular';
import { icons } from '../../Assets';

const UsefulLinks = () => {
  const usefulCardData = [
    {
      link: 'Pakistan Statement if aFFAIRS',
    },
    {
      link: 'Pakistan Statement if aFFAIRS',
    },
    {
      link: 'Pakistan Statement if aFFAIRS',
    },
    {
      link: 'Pakistan Statement if aFFAIRS',
    },
    {
      link: 'Pakistan Statement if aFFAIRS',
    },
    {
      link: 'Pakistan Statement if aFFAIRS',
    },
    {
      link: 'Pakistan Statement if aFFAIRS',
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <TopView name={'Useful Links'} />

      <CurvedView>
        <View style={styles.usefulLinksContainer}>
          {usefulCardData.map((item, index) => {
            return (
              <View style={styles.usefulCard}>
                <Image style={styles.icon} source={icons.usefulCardIcon} />

                <RobotoRegular style={styles.linkText} name={item.link} />

                <Image style={styles.ArrowIcon} source={icons.arrowDirection} />
              </View>
            );
          })}
        </View>
      </CurvedView>
    </View>
  );
};

export default UsefulLinks;
