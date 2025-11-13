import { View, Text, Image, FlatList } from 'react-native';
import React, { useCallback, useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import { styles } from './style';
import { drawerIcons, icons, Images } from '../../Assets';

import RobotoBold from '../../Components/RobotoBold';
import RobotoRegular from '../../Components/RobotoRegular';
import { vh, vw } from '../../Assets/themes/dimension';
import endpoints from '../../apis/endpoints';
import { get } from '../../apis';
import { useFocusEffect } from '@react-navigation/native';

const EmployeeDetails = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);



  const fetchEmployeeDetails = async () => {
    try {
      setLoading(true);

      const res = await get(endpoints.employee.details);

      setEmployeeData([
        {
          icon: drawerIcons.drawerClaimStatus,
          label: 'Employee Identification Number',
          value: res.data.ein,
        },
        {
          icon: icons.grade,
          label: 'Grade',
          value: res.data.grade,
        },
        {
          icon: icons.designation,
          label: 'Designation',
          value: res.data.designation,
        },
        {
          icon: icons.emailAddress,
          label: 'Email Address',
          value: res.data.emailAddress,
        },
        {
          icon: icons.mobileNumber,
          label: 'Mobile Number',
          value: res.data.mobileNumber,
        },
        {
          icon: icons.placeOfPosting,
          label: 'Place Of Posting',
          value: res.data.placeOfPosting,
        },
        {
          icon: icons.organization,
          label: 'Organization',
          value: res.data.organization,
        },
        {
          icon: icons.joiningDate,
          label: 'Joining Date',
          value: res.data.joiningDate,
        },
      ]);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchEmployeeDetails();
    }, []),
  );

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
          <RobotoRegular
            style={styles.value}
            name={item?.value ? String(item.value) : '—'}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header />

      <TopView
        name={'Employee Details'}
        image={icons.profile}
        profileDesignation={employeeData[2]?.value}
        profileName={employeeData[3]?.value}
      />

      <CurvedView>
        <View style={styles.curvedViewContent}>
          <FlatList
            renderItem={renderItem}
            data={employeeData}
            style={{ height: vh * 80 }}
            contentContainerStyle={{ paddingBottom: vh * 35 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </CurvedView>
    </View>
  );
};

export default EmployeeDetails;
