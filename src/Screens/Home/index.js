import { useNavigation } from '@react-navigation/native';
import { View, Text, ImageBackground, Image, FlatList } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import { styles } from './style';
import { cardsIcons, icons, Images } from '../../Assets';
import RobotoBold from '../../Components/RobotoBold';
import RobotoSemiBold from '../../Components/RobotoSemiBold';
import Card from '../../Components/Card';
import { vh, vw } from '../../Assets/themes/dimension';

const Home = () => {
  const navigation = useNavigation();

  const onPressCard = to => {
    navigation.navigate(to);
  };

  const toggleDrawer = () => {
    console.log('menu pressed');
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
      to: 'Attendance',
    },
    {
      name: 'Useful',
      icon: cardsIcons.usefulLinks,
      to: 'Useful',
    },
    {
      name: 'Rate This',
      icon: cardsIcons.rateThis,
      to: 'RateThis',
    },
  ];
  return (
    <>
      <Header toggleDrawer={toggleDrawer} />

      <ImageBackground
        style={styles.profileBackground}
        source={Images.profileBackground}
      >
        <View style={styles.profileContainer}>
          <View style={styles.left}>
            <RobotoBold
              style={styles.profileName}
              name={'Welcome, \nZohaib Ghaffar'}
            />
            <View style={styles.iconsTextRow}>
              <Image style={styles.profileIcons} source={icons.building} />
              <RobotoSemiBold
                name={'System Implementation 2\nInformation Technology Group'}
                style={styles.profileDetailText}
              />
            </View>

            <View style={styles.iconsTextRow}>
              <Image style={styles.profileIcons} source={icons.map} />
              <RobotoSemiBold
                name={'9554-Fourth Floor, Abhol'}
                style={styles.profileDetailText}
              />
            </View>

            <View style={styles.approvalBanner}>
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
                  <RobotoBold name={'2'} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.right}>
            <Image style={styles.userImage} source={Images.userImage} />
            <RobotoBold
              style={styles.profileText}
              name={'Sr. Officer IT Group\nHead Office'}
            />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.cardsContainer}>
        {/* <Text> asdsa</Text> */}

        <FlatList
          data={cardData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={{
            paddingBottom: vh * 35,
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
