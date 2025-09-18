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
              // alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 3.8, }}
              name={name}
            />
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 3.8, }}
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
        <View style={[styles.secondRowSub, { width: "34%" }]}>
          <Image style={styles.calenderIcon} source={icons.calender} />
          <View style={{ width: "76%" }}>
            <RobotoBold
              name={"Requested Date"}
              style={{ color: COLORS.textGray, fontSize: vw * 2.8 }}
            />
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 2.8 }}
             name={dateType}
            />
          </View>
        </View>

        {/* <View style={styles.verticalLine}> </View> */}

        <View style={[styles.secondRowSub, { width: "34%" }]}>
          <Image style={styles.calenderIcon} source={icons.calender} />
          <View style={{ width: "70%", }}>
            <RobotoBold
              name={claimType}
              style={{ color: COLORS.textGray, fontSize: vw * 2.8 }}
            />
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 2.8 }}
              name={'09/04/24'}
            />
          </View>
        </View>

        {/* <View style={styles.verticalLine}></View> */}

        <View style={[styles.secondRowSub, { width: "30%", }]}>
          <Image style={styles.calenderIcon} source={icons.calender} />
          <View style={{}}>
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 2.8 }}
              name={claimEndType}
            />
            <RobotoBold
              style={{ color: COLORS.textGray, fontSize: vw * 2.8 }}
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
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 2,
    gap: "1%",

    // width : '80%'
    // backgroundColor: "green"
  },

  secondRowSub: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor : "green",
    // justifyContent : "center",
    width: '30%',

    // backgroundColor : "yellow",
    // borderRightWidth: 1,
    // borderWidth: 2
    gap: "4%"
  },

  calenderIcon: {
    width: "20%",
    // height: vw * 6,
    height: vh * 3,
    resizeMode: 'contain',
    // borderWidth: 2
  },
});
