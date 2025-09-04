import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import RobotoBold from '../RobotoBold';
import { COLORS } from '../../Assets/themes/color';
import { icons } from '../../Assets';
import { vh, vw } from '../../Assets/themes/dimension';

const TopView = ({name}) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        'rgba(5, 117, 230, 1)',
        'rgba(2, 41, 138, 1)',
        'rgba(2, 27, 121, 1)',
      ]}
    >
      <View style={styles.subContainer}>
        <View style={{ position: 'absolute', left: 2 }}>
          <Image style={styles.backIcon} source={icons.backButton} />
        </View>

        <RobotoBold style={styles.text} name={name} />
      </View>
    </LinearGradient>
  );
};

export default TopView;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
    paddingVertical: vh * 5,
    // borderWidth: 2,
    // width: '90%',
  },
  subContainer: {
    // borderWidth: 2,
    paddingLeft: vw * 3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  text: {
    color: COLORS.white,
    fontSize: vw * 4.5,
  },
  backIcon: {
    width: vw * 8,
    height: vw * 8,
    resizeMode: 'contain',
  },
});
