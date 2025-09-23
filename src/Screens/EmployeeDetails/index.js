import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import { styles } from './style';
import { drawerIcons, icons, Images } from '../../Assets';

import RobotoBold from '../../Components/RobotoBold';
import RobotoRegular from '../../Components/RobotoRegular';
import { vh, vw } from '../../Assets/themes/dimension';

const EmployeeDetails = () => {
  const employeeDetails = [
    {
      icon: drawerIcons.drawerClaimStatus,
      label: 'Employee Identification Number',
      value: 23232,
    },
    {
      icon: icons.grade,
      label: 'Grade',
      value: 23232,
    },
    {
      icon: icons.designation,
      label: 'Designation',
      value: 23232,
    },
    {
      icon: icons.emailAddress,
      label: 'Email Address',
      value: 23232,
    },
    {
      icon: icons.mobileNumber,
      label: 'Mobile Number',
      value: 23232,
    },
    {
      icon: icons.placeOfPosting,
      label: 'Place Of Posting',
      value: 23232,
    },
    {
      icon: icons.organization,
      label: 'Organization',
      value: 23232,
    },
    {
      icon: icons.joiningDate,
      label: 'Joining Date',
      value: 23232,
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', marginVertical: vh * 1 }}>
        <Image
          source={item.icon}
          style={{
            width: vw * 9,
            height: vw * 9,
            resizeMode: 'contain',
            marginRight: vw * 4,
          }}
        />
        <View>
          <RobotoBold name={item.label} style={styles.label} />
          <RobotoRegular style={styles.value} name={item.value.toString()} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header />

      <TopView name={'Employee Details'} image={icons.profile} />

      <CurvedView>
        <View style={styles.curvedViewContent}>
          <FlatList
            renderItem={renderItem}
            data={employeeDetails}
            style={{ height: vh * 80 }}
            contentContainerStyle={{  paddingBottom : vh*35 ,  }}showsVerticalScrollIndicator={false} 
          />
        </View>
      </CurvedView>
    </View>
  );
};

export default EmployeeDetails;
