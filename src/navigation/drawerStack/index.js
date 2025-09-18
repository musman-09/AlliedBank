import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from '../../Screens/Home';
import { drawerIcons, icons } from '../../Assets';
import { COLORS } from '../../Assets/themes/color';
import { vh, vw } from '../../Assets/themes/dimension';
import LinearGradient from 'react-native-linear-gradient';
import RobotoSemiBold from '../../Components/RobotoSemiBold';
import { fonts } from '../../Assets/fonts';
import RobotoBold from '../../Components/RobotoBold';
import RobotoRegular from '../../Components/RobotoRegular';
import { ScrollView } from 'react-native-gesture-handler';

const drawerStack = () => {
  const Drawer = createDrawerNavigator();
  const menus = [
    {
      label: 'Home',
      icon: drawerIcons.home,
    },

    {
      label: 'My Pending Requests',
      icon: drawerIcons.home,
    },

    {
      label: 'Employee Details',
      icon: drawerIcons.home,
    },

    {
      label: 'HRecent HR Circulars',
      icon: drawerIcons.home,
    },

    {
      label: 'Pay Slips',
      icon: drawerIcons.home,
    },

    {
      label: 'Tax Certificate',
      icon: drawerIcons.home,
    },
    {
      label: 'Performance Management',
      icon: drawerIcons.home,
    },
    {
      label: 'Claim Status',
      icon: drawerIcons.home,
    },
    {
      label: 'Leave Management',
      icon: drawerIcons.home,
    },
    {
      label: 'Loan History',
      icon: drawerIcons.home,
    },
    {
      label: 'Attendance',
      icon: drawerIcons.home,
    },
    {
      label: 'Useful Links',
      icon: drawerIcons.home,
    },
    {
      label: 'Rate This App',
      icon: drawerIcons.home,
    },

    {
      label: 'setting',
      icon: drawerIcons.home,
    },

    {
      label: 'logout',
      icon: drawerIcons.home,
    },
  ];

  const DrawerContent = () => {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profileDetailContainer}>
            <Image source={icons.profile} style={styles.icon} />

            <View>
              <RobotoBold
                style={{ fontSize: vw * 3.9 }}
                name={'Salman Tahir'}
              />
              <RobotoBold
                style={{ fontSize: vw * 3.3 }}
                name={'salmanthair@abl.com'}
              />
            </View>
          </View>

          <View style={styles.orangeBox}>
            <RobotoBold
              style={{ color: COLORS.white, fontSize: vw * 3.5 }}
              name={'Last Login: 12/03/2024 10:49 AM'}
            />
          </View>

          <View style={styles.menusContainer}>
            {menus.map((menu, index) => {
              return (
                <TouchableOpacity style={styles.menuContainer}>
                  <Image source={menu?.icon} style={styles.menusIcon} />

                  <RobotoRegular
                    style={{ fontSize: vw * 3.5 }}
                    name={menu?.label}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        drawerPosition: 'left',
        drawerStyle: styles.drawerContainer,
        headerShown: false,
        // swipeEnabled: false,
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default drawerStack;

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: COLORS.white,
    // borderTopRightRadius: vh * 3,
    // borderBottomRightRadius: 0,
    width: vw * 70,
    // paddingVertical: vh * 3,
    // paddingHorizontal: vw * 6,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: vh * 4,
  },
  logo: {
    width: vw * 35,
    height: vh * 6,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    gap: vw * 4,
    alignItems: 'center',
    // borderWidth: 2,
  },
  menusIcon: {
    width: vw * 8,
    height: vw * 8,
    resizeMode: 'contain',
  },
  icon: {
    width: vw * 11,
    height: vw * 11,
    resizeMode: 'contain',
  },
  title: {
    fontSize: vw * 4,
    letterSpacing: vw * 0.121,
    color: COLORS.textBlackShade,
    lineHeight: vh * 2.4,
  },
  orangeBox: {
    backgroundColor: COLORS.orange,
    paddingVertical: vh * 2,
    paddingLeft: vw * 5,
    marginTop: vh * 1.8,
    justifyContent: 'center',
    // alignItems: "center"
  },
  menusContainer: {
    // gap: vh * 4.5,
    // marginBottom: vh * 4.5,

    gap: vh * 2,
    marginTop: vw * 4,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: vw * 4,

    gap: vw * 3,
  },
  drawerClose: {
    width: vw * 7,
    height: vw * 7,
  },
  profileContainer: {
    gap: vh * 2,
  },
  profileRow: {
    flexDirection: 'row',
    gap: vw * 4,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  profileIcon: {
    width: vw * 15,
    height: vw * 12,
    borderRadius: vh * 1.5,
  },
  profileTittle: {
    // width: vw * 35,
    fontSize: vw * 3.5,
    lineHeight: vh * 2,
    textAlign: 'left',
    // borderWidth: 2,
  },
  Buttontext: {
    fontSize: vw * 3.5,
    color: COLORS.white,
    letterSpacing: vw * 0.15,
  },
  ButtonContainer: {
    width: '80%',
  },
  buttonGradient: {
    borderRadius: vw * 10,
  },
  wrapper: {
    borderRadius: vh * 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vw * 2,
    padding: vh * 1.7,
  },
  container: {
    flex: 1,
    // borderWidth:2,
    // width:"100%"
  },
  buttonIcon: {
    width: vw * 7,
    height: vw * 5,
  },
  profileDetailContainer: {
    // borderWidth: 2,
    borderColor: 'red',
    gap: vw * 2.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: vw * 3,
    marginTop: vh * 4,
    // marginHorizontal : "auto"
  },
});
