import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { cardsIcons } from '../../Assets';
import RobotoBold from '../RobotoBold';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';
import RobotoSemiBold from '../RobotoSemiBold';

const Card = ({ name, icon }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Image style={styles.icon} source={icon} />
        <RobotoSemiBold style={styles.cardText} name={name} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: vw * 0.5,
    width: vw * 29.5,
    height: vh * 13,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vh * 2,

    borderColor: COLORS.cardBorderColor,
    borderRadius: vw * 4,
    backgroundColor: COLORS.white,
  },

  icon: {
    width: vw * 8,
    height: vw * 8,
    resizeMode: 'contain',
  },
  cardText: {
    justifyContent: 'center',

    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: vw * 4,
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',

    gap: vh,
  },
});
