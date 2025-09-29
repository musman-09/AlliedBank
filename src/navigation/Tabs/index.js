import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import drawerStack from '../drawerStack';
import Home from '../../Screens/Home';
import MyPendingRequest from '../../Screens/MyPendingRequest';
import PendingApproval from '../../Screens/PendingApproval';
import { icons } from '../../Assets';
import { Image, StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';
import EmployeeDetails from '../../Screens/EmployeeDetails';

import HomeStack from '../HomeStack';
import RecentHrCirculars from '../../Screens/RecentHrCirculars';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{ headerShown: false, tabBarStyle: styles.tabBarStyle }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: styles.tabLabel,
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.tabsHome}
              style={{
                marginTop: vh * 3,
                height: vh * 4,
                width: vw * 15,
                resizeMode: 'contain',
                // backgroundColor : "red"
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="EmployeeDetails"
        component={EmployeeDetails}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: styles.tabLabel,
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.tabsProfile}
              style={{
                marginTop: vh * 3,
                height: vh * 4,
                width: vw * 15,
                resizeMode: 'contain',
                // backgroundColor : "yellow"
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="RecentHrCirculars"
        component={RecentHrCirculars}
        options={{
          tabBarLabel: 'Policy',
          tabBarLabelStyle: styles.tabLabel,
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.tabsPolicy}
              style={{
                marginTop: vh * 3,
                height: vh * 4,
                width: vw * 15,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: vh * 10,
    borderWidth: 2,
  },
  tabBarIcon: {
    marginTop: vh * 3,
    height: vh * 3,
    width: vw * 15,
    resizeMode: 'contain',
  },
  tabLabel: {
    fontSize: vh * 1.7,
    marginTop: vh * 2,

    // borderWidth : 2
  },
});
