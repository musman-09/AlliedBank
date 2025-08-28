import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { Images } from '../../Assets/index';
import { styles } from './style';

const Login = () => {
  return (
    <ImageBackground
      source={Images.LoginBackground}
      style={styles.ImageBackground}
    >
      <View style={styles.loginContent}>
        <Image source={Images.AblLogo} style={styles.logo} />
      </View>
    </ImageBackground>
  );
};

export default Login;
