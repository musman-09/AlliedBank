import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { icons, Images } from '../../Assets/index';
import { styles } from './style';
import RobotoBold from '../../Components/RobotoBold';
import RobotoSemiBold from '../../Components/RobotoSemiBold';
import { vw } from '../../Assets/themes/dimension';
import InputFeild from '../../Components/InputFeild';
import Button from '../../Components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { hideErrorModal, setErrorModal, setToken } from '../../redux/authSlice';
import PopupCard from '../../Components/PopupCard';
const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const errorModal = useSelector(state => state.counter.errorModal);

  console.log(user, 'user type wala');
  const dispatch = useDispatch();
  const token = useSelector(state => state.counter.token);
  console.log(token, 'token');

  const onPressLogin = () => {
    if (user?.email.length > 0 && user?.password.length > 0) {
      dispatch(setToken('token'));
    } else {
      dispatch(
        setErrorModal({
          title: 'Missing Fields',
          detail: 'Please fill both feild username and password',
          logo: icons.errorIcon,

          buttonName: 'Continue',
        }),
      );
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

        <TouchableOpacity onPress={onPressLogin} style={styles.buttonContainer}>
          <Button title="LOGIN" titleStyle={styles.ButtonTitle} />
        </TouchableOpacity>
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
