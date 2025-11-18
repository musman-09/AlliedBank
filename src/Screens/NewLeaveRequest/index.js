import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import Select from '../../Components/Select';
import { styles } from './style';
import Button from '../../Components/Button';
import { COLORS } from '../../Assets/themes/color';
import PopupCard from '../../Components/PopupCard';
import { hideErrorModal, setErrorModal } from '../../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { icons } from '../../Assets';
import { post } from '../../apis';
import endpoints from '../../apis/endpoints';

const NewLeaveRequest = () => {
  const leavesTypes = [
    'Medical Leaves',
    'Casual Leaves',
    'Maternity Leaves',
    'Ex Pakistan Leaves',
  ];

  const leaveReason = ['Casual Leave', 'Sick Leave'];
  const Country = ['Pakistan', 'UAE', 'Saudia Arabia'];

  const dispatch = useDispatch();
  const errorModal = useSelector(state => state.counter.errorModal);

  const [formData, setFormData] = React.useState({
    leaveType: '',
    country: '',
    startDate: '',
    endDate: '',
    attachment: null,
    reason: '',
  });

  const handleSelect = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  const handleSubmit = async () => {
    if (
      formData.leaveType &&
      formData.country &&
      formData.startDate &&
      formData.endDate &&
      formData.attachment &&
      formData.reason
    ) {
      try {

        const ein = '12345';
        const url = endpoints.leaves.createLeave({
          ein,
          leaveTypeId:formData.leaveType,
          countryId:formData.country,
          startDate: formData.startDate,
          endDate: formData.endDate,
          reasonId : formData.reason,
        });

        const res = await post(url);
        console.log(res, "response of create leaves")
        if (res) {
          dispatch(
            setErrorModal({
              title: 'Successfull',
              detail: 'Submitted',
              logo: icons.successfullcon,
              buttonName: 'Continue',
            }),
          );

         
          setFormData({
            leaveType: '',
            country: '',
            startDate: '',
            endDate: '',
            attachment: null,
            reason: '',
          });
        } else {
          throw new Error('Something went wrong');
        }
      } catch (error) {
        console.log('Error creating leave:', error);
        dispatch(
          setErrorModal({
            title: 'Error',
            detail: 'Failed to submit leave',
            logo: icons.errorIcon,
            buttonName: 'Back',
          }),
        );
      }
    } else {
      dispatch(
        setErrorModal({
          title: 'Missing Fields',
          detail: 'Please fill all fields',
          logo: icons.errorIcon,
          buttonName: 'Back',
        }),
      );
    }
  };


  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'New Leave Request'} />

      <CurvedView>
        <View style={styles.curvedViewContainer}>
          <Select
            name="leaveType"
            placeholder="Select Leave Type"
            options={leavesTypes}
            label="Leave Type"
            onSelectOption={handleSelect}
            value={formData.leaveType}
          />

          <Select
            name="country"
            placeholder="Select Country"
            options={Country}
            label="Country"
            onSelectOption={handleSelect}
            value={formData.country}
          />

          <View style={styles.dateContainer}>
            <View style={{ width: '49%' }}>
              <Select
                name="startDate"
                label="Start Date"
                type="calender"
                placeholder="Select Start Date"
                onSelectOption={handleSelect}
                value={formData.startDate}
              />
            </View>
            <View style={{ width: '49%' }}>
              <Select
                name="endDate"
                label="End Date"
                type="calender"
                placeholder="Select End Date"
                onSelectOption={handleSelect}
                value={formData.endDate}
              />
            </View>
          </View>

          <Select
            name="attachment"
            label="Attachment*"
            placeholder="Select File"
            type="file"
            onSelectOption={handleSelect}
            value={formData.attachment}
          />

          <Select
            name="reason"
            options={leaveReason}
            label="Reason"
            placeholder="--Select Reason--"
            onSelectOption={handleSelect}
            value={formData.reason}
          />

          <TouchableOpacity onPress={handleSubmit}>
            <Button
              title="Submit Request"
              titleStyle={{ color: COLORS.white }}
            />
          </TouchableOpacity>
        </View>
      </CurvedView>

      <PopupCard
        visible={errorModal.visible}
        title={errorModal.title}
        detail={errorModal.detail}
        logo={errorModal.logo}
        buttonName={errorModal.buttonName}
        onClose={() => dispatch(hideErrorModal())}
      />
    </View>
  );
};

export default NewLeaveRequest;
