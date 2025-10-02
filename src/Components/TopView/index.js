import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import RobotoBold from '../RobotoBold';
import { COLORS } from '../../Assets/themes/color';
import { icons } from '../../Assets';
import { vh, vw } from '../../Assets/themes/dimension';
import { useNavigation } from '@react-navigation/native';
import RobotoRegular from '../RobotoRegular';

const TopView = ({ name, image, profileName, profileDesignation }) => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
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
        <TouchableOpacity
          onPress={onPressBack}
          style={{ position: 'absolute', left: 2 }}
        >
          <Image style={styles.backIcon} source={icons.backButton} />
        </TouchableOpacity>

        <RobotoBold style={styles.text} name={name} />

        {image && (
          <>
            {' '}
            <Image source={image} style={styles.image} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: vh * 2,
              }}
            >
              <RobotoBold style={styles.imageHeading} name={profileName} />
              <RobotoRegular
                style={styles.imageText}
                name={profileDesignation}
              />
            </View>
          </>
        )}
      </View>
    </LinearGradient>
  );
};

export default TopView;

const styles = StyleSheet.create({
  container: {
    paddingVertical: vh * 5,
  },
  subContainer: {
    paddingLeft: vw * 3,
    width: '100%',

    alignItems: 'center',
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
  image: {
    width: vw * 16,
    height: vw * 16,
    resizeMode: 'contain',
    marginTop: vh * 1.8,
  },
  imageHeading: {
    color: COLORS.white,
  },
  imageText: {
    color: COLORS.white,
    fontSize: vw * 3,
    maxWidth: '80%',
    textAlign: 'center',
  },
});
