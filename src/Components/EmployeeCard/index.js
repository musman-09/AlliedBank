import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
// import { icons } from '../../Assets';

import RobotoBold from '../RobotoBold';
import RobotoRegular from '../RobotoRegular';
import { icons } from '../../Assets';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';

const EmployeeCard = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleButton = () => {
    setIsToggle(!isToggle);
  };
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.left}>
          <Image source={icons.pdfIcon} style={styles.docIcon} />
          <RobotoBold style={styles.docName} name={'Employee Leave Policy'} />
        </View>

        {isToggle ? (
          <View style={styles.right}>
            <Image style={styles.docIcon} source={icons.calender} />
            <RobotoBold
              style={styles.docName}
              name={'Last Update\n11/jan/2023'}
            />
          </View>
        ) :  <View style={styles.right}>  <TouchableOpacity onPress={toggleButton}>
            <Image
              style={styles.downloadIcon}
              source={isToggle ? icons.arrowUp : icons.arrowDown}
            />
          </TouchableOpacity> </View> }
      </View>

      {isToggle && (
        <View style={styles.description}>
          <RobotoBold name={'Description:'} />
          <RobotoRegular
            style={styles.descriptionText}
            name={
              'Our Employee Leave Policy ensures a clear and fair framework for managing time off. It includes various types of leave such as annual, sick, parental, and special leave categories'
            }
          />
        </View>
      )}

      <View style={styles.secondRow}>
        {isToggle && (
          <> 
          <View style={styles.secondRowLeft}>
            <Image style={styles.downloadIcon} source={icons.downloadIcon} />
            <Image style={styles.downloadIcon} source={icons.eyeIcon} />
          </View>

 <View style={styles.secondRowRight}>
          <TouchableOpacity onPress={toggleButton}>
            <Image
              style={styles.downloadIcon}
              source={isToggle ? icons.arrowUp : icons.arrowDown}
            />
          </TouchableOpacity>
        </View>
        </>


        )}

       
      </View>
    </View>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    gap: vh,
    borderRadius: vw * 5,
    borderWidth: 2,
    borderColor: COLORS.lightBorder,
    elevation: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: vw * 4,
    paddingVertical: vh * 1,
 
  },
  left: {
    flexDirection: 'row',
    // borderWidth: 2,
    alignItems: 'center',
    width: '50%',
    gap: vw * 2,
  },
  docIcon: {
    width: vw * 7,
    height: vw * 7,
    resizeMode: 'contain',
  },
  firstRow: {
    flexDirection: 'row',
    // borderWidth: 2,
    borderColor: 'red',
    // justifyContent: 'space-between',
    // alignItems: 'flex-end',
    // alignItems:""
  },
  right: {
    flexDirection: 'row',
    // borderWidth: 2,
    gap: vw * 2,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  description: {
    // borderWidth: 2,
    width: '95%',
  },
  descriptionText: {
    fontSize: vw * 3,
    marginTop: vh * 0.5,
    // alignSelf: 'flex-start',
    // borderWidth: 2,

    textAlign: 'justify',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondRowLeft: {
    flexDirection: 'row',
    gap: vw,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  downloadIcon: {
    width: vw * 7,
    height: vw * 7,
    resizeMode: 'contain',
  },
  docName: {
    fontSize: vw * 3.5,
    color: COLORS.textGray,
  },
});
