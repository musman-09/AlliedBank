// import { View, Text, StyleSheet, Image, Button } from 'react-native';
// import React from 'react';
// import RobotoBold from '../../Components/RobotoBold';
// import RobotoRegular from '../RobotoRegular';
// import Button from '../../Components/Button';

// const PopupCard= ({ title, detail, logo, buttonName }) => {
//   return (
//     <View style={styles.container}>
//       <Image source={logo} />

//       <RobotoBold name={title} />

//       <RobotoRegular name={detail} />


//     </View>
//   );
// };

// export default PopupCard;

// const styles = StyleSheet.create({
//   container: {},
// });













import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React from 'react';
import RobotoBold from '../RobotoBold';
import RobotoRegular from '../RobotoRegular';
import Button from '../Button';
import { COLORS } from '../../Assets/themes/color';
import { vw, vh } from '../../Assets/themes/dimension';

const PopupCard = ({ visible, title, detail, logo, buttonName, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {logo && <Image source={logo} style={styles.logo} />}
          <RobotoBold name={title} style={styles.title} />
          <RobotoRegular name={detail} style={styles.detail} />

          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Button title={buttonName || 'OK'} titleStyle={styles.buttonText} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PopupCard;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: COLORS.white,
    borderRadius: vw * 4,
    width: '80%',
    paddingVertical: vh * 4,
    paddingHorizontal: vw * 5,
    alignItems: 'center',
    elevation: 5,
  },
  logo: {
    width: vw * 15,
    height: vw * 15,
    resizeMode: 'contain',
    marginBottom: vh * 2,
  },
  title: {
    fontSize: vw * 5,
    color: COLORS.black,
    marginBottom: vh,
    textAlign: 'center',
  },
  detail: {
    fontSize: vw * 4,
    color: COLORS.labelColor,
    textAlign: 'center',
    marginBottom: vh * 3,
  },
  button: {
    width: '80%',
  },
  buttonText: {
    fontSize: vw * 4,
    color : COLORS.white
  },
});
