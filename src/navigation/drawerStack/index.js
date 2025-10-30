import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { drawerIcons, icons } from '../../Assets';
import { COLORS } from '../../Assets/themes/color';
import { vh, vw } from '../../Assets/themes/dimension';
import RobotoBold from '../../Components/RobotoBold';
import RobotoRegular from '../../Components/RobotoRegular';
import { ScrollView } from 'react-native-gesture-handler';
import Tabs from '../Tabs';
import { logoutUser } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';

const drawerStack = () => {
  const dispatch = useDispatch();
  const Drawer = createDrawerNavigator();

  const menus = [
    {
      label: 'Home',
      icon: drawerIcons.home,
      mainParent: 'Tabs',
      stChild: 'Home',
    },
    {
      label: 'My Pending Requests',
      icon: drawerIcons.drawerPendingRequest,
      mainParent: 'Tabs',
      stChild: 'HomeStack',
      ndChild: 'MyPendingRequest',
    },
    {
      label: 'Employee Details',
      icon: drawerIcons.drawerEmployeeDetails,
      mainParent: 'Tabs',
      stChild: 'EmployeeDetails',
    },
    {
      label: 'Recent HR Circulars',
      icon: drawerIcons.drawerRecentHrCirculars,
      mainParent: 'Tabs',
      stChild: 'RecentHrCirculars',
    },

    {
      label: 'Pay Slips',
      icon: drawerIcons.drawerPaySlip,
      ndChild: 'PaySlip',
      mainParent: 'Tabs',
      stChild: 'HomeStack',
    },

    {
      label: 'Tax Certificate',
      icon: drawerIcons.drawerTaxCertificate,
      ndChild: 'TaxCertificate',
      stChild: 'HomeStack',
      mainParent: 'Tabs',
    },
    {
      label: 'Performance Management',
      icon: drawerIcons.drawerPerformanceManagement,
      ndChild: 'PerformanceManagement',
      mainParent: 'Tabs',
      stChild: 'HomeStack',
    },
    {
      label: 'Claim Status',
      icon: drawerIcons.drawerClaimStatus,
      ndChild: 'ClaimStatus',
      stChild: 'HomeStack',
      mainParent: 'Tabs',
    },
    {
      label: 'Leave Management',
      icon: drawerIcons.drawerClaimStatus,
      ndChild: 'LeaveManagement',
      stChild: 'HomeStack',
      mainParent: 'Tabs',
    },
    {
      label: 'Loan History',
      icon: drawerIcons.drawerLoanHistory,
      ndChild: 'LoanHistory',
      stChild: 'HomeStack',
      mainParent: 'Tabs',
    },
    {
      label: 'Attendance',
      icon: drawerIcons.drawerAttendance,
      ndChild: 'AttendanceStatus',
      stChild: 'HomeStack',
      mainParent: 'Tabs',
    },
    {
      label: 'Useful Links',
      icon: drawerIcons.drawerUsefulLinks,
      ndChild: 'UsefulLinks',
      stChild: 'HomeStack',
      mainParent: 'Tabs',
    },
    {
      label: 'Rate This App',
      icon: drawerIcons.drawerRateThisApp,
      ndChild: 'RateThis',
      stChild: 'HomeStack',
      mainParent: 'Tabs',
    },

    { label: 'Settings', icon: drawerIcons.drawerSettings, to: 'Settings' },

    { label: 'Logout', icon: drawerIcons.drawerLogout, to: 'Logout' },
  ];

  const DrawerContent = ({ navigation }) => {
    const onPressMenu = menu => {
      if (menu?.mainParent && menu?.stChild && menu?.ndChild) {
        navigation.navigate(menu.mainParent, {
          screen: menu.stChild,
          params: {
            screen: menu.ndChild,
          },
        });
      } else if (menu?.mainParent && menu?.stChild) {
        navigation.navigate(menu.mainParent, { screen: menu.stChild });
      } else if (menu?.to) {
        if (menu?.to === 'Logout') {
          dispatch(logoutUser());
        } else {
          navigation.navigate(menu.to);
          
        }
      }
    };
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
                <TouchableOpacity
                  style={styles.menuContainer}
                  onPress={() => onPressMenu(menu)}
                >
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
      }}
      initialRouteName="Tabs"
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
};

export default drawerStack;

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: COLORS.white,

    width: vw * 70,
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
  },
  menusContainer: {
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
  },
  profileIcon: {
    width: vw * 15,
    height: vw * 12,
    borderRadius: vh * 1.5,
  },
  profileTittle: {
    fontSize: vw * 3.5,
    lineHeight: vh * 2,
    textAlign: 'left',
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
  },
  buttonIcon: {
    width: vw * 7,
    height: vw * 5,
  },
  profileDetailContainer: {
    borderColor: 'red',
    gap: vw * 2.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: vw * 3,
    marginTop: vh * 4,
  },
});
