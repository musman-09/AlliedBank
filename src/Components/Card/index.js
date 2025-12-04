import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { cardsIcons } from '../../Assets';
import RobotoBold from '../RobotoBold';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';
import RobotoSemiBold from '../RobotoSemiBold';

const Card = ({ name, icon, onPress, index }) => {
  const isFirstRow = index < 3;
  return (
    <TouchableOpacity style={[
      styles.cardContainer,
      {
        marginTop: isFirstRow ? vh * 2 : 0,
        marginBottom: vh * 2,
      },
    ]}
    
      onPress={onPress}>
      <View style={styles.cardContent}>
        <Image style={styles.icon} source={icon} />
        <RobotoSemiBold style={styles.cardText} name={name} />
      </View>
    </TouchableOpacity>
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
