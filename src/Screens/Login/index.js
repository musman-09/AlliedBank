import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { icons, Images } from '../../Assets/index';
import { styles } from './style';
import RobotoBold from '../../Components/RobotoBold';
import RobotoSemiBold from '../../Components/RobotoSemiBold';
import { vw } from '../../Assets/themes/dimension';
import InputFeild from '../../Components/InputFeild';
import Button from '../../Components/Button';

const Login = () => {
  return (
    <ImageBackground
      source={Images.LoginBackground}
      style={styles.ImageBackground}
    >
      <View style={styles.loginContent}>
        <View style={styles.logoContent}>
          <Image source={Images.AblLogo} style={styles.logo} />|
          <View style={styles.logoHeadingRow}>
            <RobotoBold style={styles.logoHeading} name={'Please Login'} />

            <View
              style={{
                flexDirection: 'row',
                gap: vw * 2.5,
                justifyContent: 'center',
              }}
            >
              <RobotoBold style={styles.logoHeading} name={' To Your'} />
              <RobotoBold style={styles.logoHeadingAccount} name={'Account!'} />
            </View>
          </View>
        </View>

        <InputFeild
          label={'Username'}
          placeholder={'Enter Your Name'}
          labelStyle={styles.labelStyle}
        />

        <InputFeild
          label={'Password'}
          placeholder={'Enter Your Password'}
          labelStyle={styles.labelStyle}
          eyeIcon={icons.eyeClose}
          eyeOpen={icons.eyeOpen}
          secureText={true}
        />

        <View style={styles.buttonContainer}>
          <Button title="LOGIN" titleStyle={styles.ButtonTitle} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
