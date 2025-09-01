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
  const renderItem = ({ item }) => {
    return <Card name={item.name} icon={item.icon} />;
  };
  const cardData = [
    {
      name: 'My Pending Request',
      icon: cardsIcons.attendance,
    },
    {
      name: 'Employee Details',
      icon: cardsIcons.claimStatus,
    },
    {
      name: 'Recent Hr Circulars',
      icon: cardsIcons.employee,
    },
    {
      name: 'Pay\nSlips',
      icon: cardsIcons.paySlips,
    },
    {
      name: 'Tax\nCertificates',
      icon: cardsIcons.taxCertificate,
    },
    {
      name: 'Performance Management',
      icon: cardsIcons.performanceManagement,
    },
    {
      name: 'Claim\nStatus',
      icon: cardsIcons.claimStatus,
    },
    {
      name: 'Leave Management',
      icon: cardsIcons.leaveManagement,
    },
    {
      name: 'Loan\nHistory',
      icon: cardsIcons.loanHistory,
    },
    {
      name: 'Attendance',
      icon: cardsIcons.attendance,
    },
    {
      name: 'Useful',
      icon: cardsIcons.usefulLinks,
    },
    {
      name: 'Rate This',
      icon: cardsIcons.rateThis,
    },
  ];
  return (
    <>
      <Header />

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
          contentContainerStyle={{ gap: vh * 1.5 }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
        />
      </View>
    </>
  );
};

export default Home;
