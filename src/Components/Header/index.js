import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { icons, Images } from '../../Assets';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Image source={Images.AblLogoShort} style={styles.headerLeftLogo} />
      </View>

      <View style={styles.headerRight}>
        <View style={styles.headerRightContent}>
          <Image source={icons.search} style={styles.headerRightIcons} />
          <Image source={icons.notifications} style={styles.headerRightIcons} />
          <Image source={icons.menu} style={styles.headerRightIcons} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerLeftLogo: {
    width: vw * 45,
    height: vh * 5,
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',
  },
  headerLeft: {
    backgroundColor: COLORS.white,
    width: '50%',
    paddingVertical: vh,
  },
  headerRight: {
    backgroundColor: COLORS.orange,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerRightContent: {
    flexDirection: 'row',

    marginRight: vw * 2,

    gap: vw * 3,
  },
  headerRightIcons: {
    width: vw * 8,
    height: vw * 8,
    resizeMode: 'contain',
  },
});
