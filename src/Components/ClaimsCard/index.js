import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { icons } from '../../Assets';
import RobotoBold from '../RobotoBold';
import { COLORS } from '../../Assets/themes/color';
import { vh, vw } from '../../Assets/themes/dimension';
import { fonts } from '../../Assets/fonts';

const ClaimsCard = ({ name, type, dateType, claimType, claimEndType }) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.left}>
          <View>
            <Image source={icons.editIcon} style={styles.editIcon} />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 3.8 }}
              name={name}
            />
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 3.8 }}
              name={type}
            />
          </View>
        </View>

        <View style={styles.eyeViewContainer}>
          <Image source={icons.whiteEye} style={styles.eye} />
          <RobotoBold style={styles.eyeText} name={'View'} />
        </View>
      </View>

      <View style={styles.horizontallLine}></View>

      <View style={styles.secondRow}>
        <View style={styles.secondRowSub}>
          <Image style={styles.calenderIcon} source={icons.calender} />
          <View>
            <RobotoBold
              name={dateType}
              style={{ color: COLORS.textGray, fontSize: vw * 3 }}
            />
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 3 }}
              name={'09/04/24'}
            />
          </View>
        </View>

        <View style={styles.verticalLine}> </View>

        <View style={styles.secondRowSub}>
          <Image style={styles.calenderIcon} source={icons.calender} />
          <View>
            <RobotoBold
              name={claimType}
              style={{ color: COLORS.textGray, fontSize: vw * 3 }}
            />
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 3 }}
              name={'09/04/24'}
            />
          </View>
        </View>

        <View style={styles.verticalLine}></View>

        <View style={styles.secondRowSub}>
          <Image style={styles.calenderIcon} source={icons.calender} />
          <View style={{}}>
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 3 }}
              name={claimEndType}
            />
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 3 }}
              name={'09/04/24'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ClaimsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    elevation: 4,
    borderRadius: vw * 4,
    borderWidth: 1,
    borderColor: COLORS.lightBorder,
    // borderColor :"red",
    marginVertical: vh * 1.5,
    paddingHorizontal: vw * 2,
    paddingVertical: vh * 1.5,
    width: '100%',
  },
  eyeViewContainer: {
    backgroundColor: COLORS.orange,
    flexDirection: 'row',
    alignItems: 'center',
    gap: vw * 2,
    paddingVertical: vh * 0.5,
    borderRadius: vw * 5,
    justifyContent: 'center',
    paddingHorizontal: vw * 3,
    position: 'absolute',
    right: 0,
    bottom: vh * 2.3,
    // borderWidth:2,
  },
  eye: {
    width: vw * 5,
    height: vw * 5,
    resizeMode: 'contain',
  },
  eyeText: {
    color: COLORS.white,
    fontSize: vw * 3.3,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    // width: '100%',
    // borderWidth:2
  },
  editIcon: {
    width: vw * 10,
    height: vh * 6,
    resizeMode: 'contain',
  },
  left: {
    flexDirection: 'row',
    gap: vw * 2,
    // borderWidth:2,
    // width  : "100%",
    borderColor: 'pink',
  },
  horizontallLine: {
    height: 1,
    backgroundColor: COLORS.lightBorder,
    marginVertical: vh * 1.5,
    width: '100%',
  },
  verticalLine: {
    height: vh * 3.5,
    backgroundColor: COLORS.textGray,

    width: vw * 0.4,
  },
  secondRow: {
    flexDirection: 'row',
    gap: vw * 1,

    alignItems: 'center',
    // borderWidth:2,
    // width : '80%'
  },
  secondRowSub: {
    flexDirection: 'row',

    alignItems: 'center',
    gap: vw * 1,
    // borderWidth:2,
    // width: "30%",
    borderColor: 'purple',
  },
  calenderIcon: {
    width: vw * 8,
    height: vw * 8,
    resizeMode: 'contain',
  },
});
