import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import Header from '../../Components/Header';
import { styles } from './style';
import { cardsIcons, icons, Images } from '../../Assets';
import RobotoBold from '../../Components/RobotoBold';
import RobotoSemiBold from '../../Components/RobotoSemiBold';
import Card from '../../Components/Card';
import { vh, vw } from '../../Assets/themes/dimension';

import endpoints from '../../apis/endpoints';
import { get } from '../../apis';
import Loader from '../../Components/Loader';
import { COLORS } from '../../Assets/themes/color';

const Home = () => {
  const navigation = useNavigation();

  const [employeeData, setEmployeeData] = useState('');
  const [loading, setLoading] = useState(false);

  const onPressCard = to => {
    navigation.navigate(to);
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const renderItem = ({ item }) => {
    return (
      <Card
        onPress={() => onPressCard(item.to)}
        name={item.name}
        icon={item.icon}
      />
    );
  };
  const cardData = [
    {
      name: 'My Pending Request',
      icon: cardsIcons.attendance,
      to: 'MyPendingRequest',
    },
    {
      name: 'Employee Details',
      icon: cardsIcons.claimStatus,
      to: 'EmployeeDetails',
    },
    {
      name: 'Recent Hr Circulars',
      icon: cardsIcons.employee,
      to: 'RecentHrCirculars',
    },
    {
      name: 'Pay\nSlips',
      icon: cardsIcons.paySlips,
      to: 'PaySlip',
    },
    {
      name: 'Tax\nCertificates',
      icon: cardsIcons.taxCertificate,
      to: 'TaxCertificate',
    },
    {
      name: 'Performance Management',
      icon: cardsIcons.performanceManagement,
      to: 'PerformanceManagement',
    },
    {
      name: 'Claim\nStatus',
      icon: cardsIcons.claimStatus,
      to: 'ClaimStatus',
    },
    {
      name: 'Leave Management',
      icon: cardsIcons.leaveManagement,
      to: 'LeaveManagement',
    },
    {
      name: 'Loan\nHistory',
      icon: cardsIcons.loanHistory,
      to: 'LoanHistory',
    },
    {
      name: 'Attendance',
      icon: cardsIcons.attendance,
      to: 'AttendanceStatus',
    },
    {
      name: 'UsefulLinks',
      icon: cardsIcons.usefulLinks,
      to: 'UsefulLinks',
    },
    {
      name: 'Rate This',
      icon: cardsIcons.rateThis,
      to: 'RateThis',
    },
  ];

  const getEmployeeDetails = async () => {
    try {
      setLoading(true);
      const res = await get(endpoints.employee.details);
  
      setEmployeeData(res?.data);
    } catch (error) {
      console.log(error, 'error');
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getEmployeeDetails();
    }, []),
  );

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      {loading ? (
        <Loader containerStyle={{ marginTop: vh * 10 }} />
      ) : (
        <ImageBackground
          style={styles.profileBackground}
          source={Images.profileBackground}
        >
          <View style={styles.profileContainer}>
            <View style={styles.left}>
              <RobotoBold
                style={styles.profileName}
                name={`Welcome, \n${employeeData.employeeName}`}
              />
              <View style={styles.iconsTextRow}>
                <Image style={styles.profileIcons} source={icons.building} />
                <RobotoSemiBold
                  name={employeeData.organization}
                  style={styles.profileDetailText}
                />
              </View>

              <View style={styles.iconsTextRow}>
                <Image style={styles.profileIcons} source={icons.map} />
                <RobotoSemiBold
                  name={employeeData.placeOfPosting}
                  style={styles.profileDetailText}
                />
              </View>

              <TouchableOpacity
                onPress={() => onPressCard('MyPendingRequest')}
                style={styles.approvalBanner}
              >
                <View style={styles.approvalBannerContent}>
                  <Image
                    style={styles.bannerIcon}
                    source={icons.pendingApproval}
                  />
                  <RobotoBold
                    style={styles.bannerText}
                    name={'Pending Approval'}
                  />

                  <View style={styles.approvalNumber}>
                    <RobotoBold style={{color: COLORS.orange}} name={'2'} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.right}>
              <Image style={styles.userImage} source={Images.userImage} />

              <RobotoBold
                style={styles.profileText}
                name={employeeData.designation}
              />
            </View>
          </View>
        </ImageBackground>
      )}

      <View style={styles.cardsContainer}>
        <FlatList
          data={cardData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={{
            gap: vh * 1.5,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
        />
      </View>
    </>
  );
};

export default Home;
