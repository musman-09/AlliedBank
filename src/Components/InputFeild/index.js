import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import RobotoBold from '../RobotoBold';
import { COLORS } from '../../Assets/themes/color';
import { vh, vw } from '../../Assets/themes/dimension';
import { fonts } from '../../Assets/fonts';


const InputFeild = ({
  label,
  labelStyle,
  placeholder,
  eyeIcon,
  eyeOpen,
  secureText,
  onChangeText,
}) => {
  const [passwordHide, setPasswordHide] = useState(false);

  const passwordHideFunc = () => {
    setPasswordHide(!passwordHide);
  };
  return (
    <View style={styles.container}>
      <RobotoBold style={labelStyle} name={label} />

      <View style={eyeIcon ? styles.inputContainerIcon : styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={passwordHide ? secureText : false}
          //   secureTextEntry={true}
          onChangeText={onChangeText}
        />
        {eyeIcon && (
          <TouchableOpacity onPress={passwordHideFunc}>
            <Image
              style={styles.image}
              source={passwordHide ? eyeIcon : eyeOpen}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputFeild;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: vh,
    marginTop: vh * 2,
  },
  input: {
    fontSize: vw * 4,

    flex: 1,

    fontFamily: 'bold',
    color: COLORS.labelColor,
  },
  inputContainer: {
    backgroundColor: COLORS.white,

    borderColor: COLORS.feildBorderColor,
    borderWidth: 2,
    borderRadius: vw * 2.5,
    paddingHorizontal: vw * 3,
    flexDirection: 'row',
    height: vh * 7,
  },
  inputContainerIcon: {
    backgroundColor: COLORS.white,

    borderColor: COLORS.feildBorderColor,
    borderWidth: 2,
    borderRadius: vw * 2.5,
    paddingHorizontal: vw * 3,
    flexDirection: 'row',
    height: vh * 7,

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: vw * 8,
    height: vw * 6,
    resizeMode: 'contain',
  },
});
