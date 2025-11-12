import { View, Text } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import Select from '../../Components/Select';
import { styles } from './style';
import { vw } from '../../Assets/themes/dimension';
import Button from '../../Components/Button';
import { COLORS } from '../../Assets/themes/color';

const NewLeaveRequest = () => {
  const leavesTypes = [
    'Medical Leaves',
    'Casual Leaves',
    'Maternity Leaves',
    'Ex Pakistan Leaves',
  ];

  const leaveReason = ["casual Leave" , "Sick Leave"]
  const Country = ['Pakistan', 'UAE', 'Saudia Arabia'];

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'New Leave Request'} />

      <CurvedView>
        <View style={styles.curvedViewContainer}>
          <Select
            placeholder={'Select Leaves Type'}
            options={leavesTypes}
            label={'Select Leave Type'}
          />

          <Select
            placeholder={'Select Country'}
            options={Country}
            label={'Country'}
          />

          <View style={styles.dateContainer}>
            <View style={{ width: "49%" , }}>
              <Select label={'Start Date'} placeholder={'Select Start Date'} />
            </View>
            <View style={{ width: "49%"  }}>
              <Select label={'End Date'} placeholder={'Select End Date'} />
            </View>
          </View>

          <Select label={"Attachment*"}/>
          <Select options={leaveReason} label={"Reason"} placeholder={"--Select Reason--"}/>

          <Button  title={"Submit Request"} titleStyle={{color: COLORS.white}} />

        </View>
      </CurvedView>
    </View>
  );
};

export default NewLeaveRequest;
