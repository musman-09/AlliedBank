import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { icons, Images } from '../../Assets/index';
import { styles } from './style';
import RobotoBold from '../../Components/RobotoBold';
import RobotoSemiBold from '../../Components/RobotoSemiBold';
import { vh, vw } from '../../Assets/themes/dimension';
import InputFeild from '../../Components/InputFeild';
import Button from '../../Components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { hideErrorModal, setErrorModal, setToken } from '../../redux/authSlice';
import PopupCard from '../../Components/PopupCard';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { post } from '../../apis';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import endpoints from '../../apis/endpoints';
import Loader from '../../Components/Loader';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const errorModal = useSelector(state => state.counter.errorModal);

  const dispatch = useDispatch();
  const token = useSelector(state => state.counter.token);

  const [loading, setLoading] = useState(false);

  const onPressLogin = async () => {
    if (!user.email || !user.password) {
      dispatch(
        setErrorModal({
          title: 'Missing Fields',
          detail: 'Please fill both feild username and password',
          logo: icons.errorIcon,
          buttonName: 'Continue',
        }),
      );
      return;
    }

    try {
      setLoading(true);
      let body = {
        username: user.email,
        password: user.password,
      };

      const res = await post(endpoints.auth.login, body);

      if (res?.data?.token) {
        dispatch(setToken(res.data.token));
      } else {
        dispatch(
          setErrorModal({
            title: 'Invalid Credentials',
            detail: 'Username or password is incorrect',
            logo: icons.errorIcon,
            buttonName: 'Continue',
          }),
        );
      }
    } catch (error) {
      dispatch(
        setErrorModal({
          title: 'Login Failed',
          detail: 'Something went wrong. Please try again.',
          logo: icons.errorIcon,
          buttonName: 'Continue',
        }),
      );
    } finally {
      setLoading(false);
    }
  };

  const onTouchBiometric = async () => {
    const rnBiometrics = new ReactNativeBiometrics();

    try {
      const { available, biometryType } =
        await rnBiometrics.isSensorAvailable();

      if (!available) {
        dispatch(
          setErrorModal({
            title: 'Biometric sensor not available',
            detail: 'Please fill both feild username and password',
            logo: icons.errorIcon,

            buttonName: 'Continue',
          }),
        );

        return;
      }

      if (
        biometryType === BiometryTypes.TouchID ||
        biometryType === BiometryTypes.Biometrics
      ) {
        const { success } = await rnBiometrics.simplePrompt({
          promptMessage: 'Authenticate with Fingerprint',
        });

        if (success) {
          dispatch(setToken('Usman'));
        } else {
          console.log('Fingerprint Auth Canceled');
        }
      } else if (biometryType === BiometryTypes.FaceID) {
        const { success } = await rnBiometrics.simplePrompt({
          promptMessage: 'Authenticate with Face ID',
        });

        if (success) {
          dispatch(setToken('usman'));
        } else {
          console.log('Face ID Auth Canceled');
        }
      } else {
        console.log('No recognized biometric type');
      }
    } catch (error) {
      console.log('Biometric error:', error);
    }
  };

  return (
    <ImageBackground
      source={Images.LoginBackground}
      style={styles.ImageBackground}
    >
      <View style={styles.loginContent}>
        <View style={styles.logoContent}>
          <Image source={Images.AblLogo} style={styles.logo} />
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
          value={user.email}
          onChangeText={text => setUser({ ...user, email: text })}
        />

        <InputFeild
          label={'Password'}
          placeholder={'Enter Your Password'}
          labelStyle={styles.labelStyle}
          eyeIcon={icons.eyeClose}
          eyeOpen={icons.eyeOpen}
          secureText={true}
          value={user.password}
          onChangeText={text => setUser({ ...user, password: text })}
        />

        <TouchableOpacity onPress={onTouchBiometric}>
          {Platform.OS === 'ios' ? (
            <Image source={icons.faceId} style={styles.fingerPrint} />
          ) : (
            <Image
              onPress={onTouchBiometric}
              source={icons.fingerPrint}
              style={styles.fingerPrint}
            />
          )}
        </TouchableOpacity>

        {loading ? (
          <Loader containerStyle={{ marginTop: vh * 4 }} />
        ) : (
          <TouchableOpacity
            onPress={onPressLogin}
            style={styles.buttonContainer}
          >
            <Button title="LOGIN" titleStyle={styles.ButtonTitle} />
          </TouchableOpacity>
        )}
      </View>

      <PopupCard
        visible={errorModal.visible}
        title={errorModal.title}
        detail={errorModal.detail}
        logo={errorModal.logo}
        buttonName={errorModal.buttonName}
        onClose={() => dispatch(hideErrorModal())}
      />
    </ImageBackground>
  );
};

export default Login;
