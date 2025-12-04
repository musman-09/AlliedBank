import { ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import RobotoBold from '../../Components/RobotoBold';
import RobotoSemiBold from '../../Components/RobotoSemiBold';
import RobotoRegular from '../../Components/RobotoRegular';
import Select from '../../Components/Select';
import { vh } from '../../Assets/themes/dimension';
import Button from '../../Components/Button';
import { COLORS } from '../../Assets/themes/color';
import { get } from '../../apis';
import endpoints from '../../apis/endpoints';
import { useFocusEffect } from '@react-navigation/native';
import { hideErrorModal, setErrorModal } from '../../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { icons } from '../../Assets';
import PopupCard from '../../Components/PopupCard';

const PendingApproval = () => {
  const dispatch = useDispatch();
  const errorModal = useSelector(state => state.counter.errorModal);
  const selectOptions = [
    'Level 1 Remarks',
    'Level 2 Remarks',
    'Level 3 Remarks',
  ];
  const [selectedOption, setSelectedOption] = useState('');
  const [pendingApprovalData, setPendingApprovalData] = useState();

  const fetchPendingApproval = async () => {
    try {
      const res = await get(endpoints.approval.pendingApproval);

      setPendingApprovalData(res?.data);
    } catch (e) {
      console.log(e, 'errorrrr p');
    } finally {
    }
  };

  const handleApprove = () => {
    if (!pendingApprovalData) return;

    let found = false;

    pendingApprovalData.forEach(item => {
      if (item.actionType === 'APPROVE') {
        found = true;
      }
    });

    if (found) {
      dispatch(
        setErrorModal({
          title: 'Approved',
          detail: 'The approval is Approved',
          logo: icons.successfullcon,
          buttonName: 'Continue',
        }),
      );
    } else {
      dispatch(
        setErrorModal({
          title: 'You cannot approve request',
          detail:
            'The approval is still pending as it is neither rejected nor approved.',
          logo: icons.errorIcon,
          buttonName: 'Continue',
        }),
      );
    }
  };

  const handleReject = () => {
    if (!pendingApprovalData) return;

    let found = false;

    pendingApprovalData.forEach(item => {
      if (item.actionType === 'REJECT') {
        found = true;
      }
    });

    if (found) {
      dispatch(
        setErrorModal({
          title: 'Rejected',
          detail: 'The approval is rejected.',
          logo: icons.successfullcon,
          buttonName: 'Continue',
        }),
      );
    } else {
      dispatch(
        setErrorModal({
          title: 'You cannot reject request',
          detail:
            'The approval is still pending as it is neither rejected nor approved.',
          logo: icons.errorIcon,
          buttonName: 'Continue',
        }),
      );
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchPendingApproval();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Pending Approval'} />

      <CurvedView>
        <ScrollView>
          <View style={styles.leaveCard}>
            <View style={styles.leaveCardHeader}>
              <View style={styles.fromDateBox}>
                <RobotoBold name={'From'} style={styles.dateLabel} />
                <RobotoBold name={'10/04/2024'} style={styles.dateValue} />
              </View>

              <View style={styles.toDateBox}>
                <RobotoRegular name={'To'} style={styles.dateLabel} />
                <RobotoBold name={'19/04/2024'} style={styles.dateValue} />
              </View>

              <View style={styles.daysCountBox}>
                <RobotoRegular name={'No of Days'} style={styles.dateLabel} />
                <RobotoBold name={'10'} style={styles.dateValue} />
              </View>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.balanceBox}>
                <RobotoBold name={'19/30'} style={styles.statsNumber} />
                <RobotoRegular
                  name={'Leave Balance'}
                  style={styles.statsLabel}
                />
              </View>

              <View style={styles.pendingBox}>
                <RobotoBold name={'14'} style={styles.statsNumber} />
                <RobotoRegular
                  name={'Leave Pending'}
                  style={styles.statsLabel}
                />
              </View>

              <View style={styles.approvedBox}>
                <RobotoBold name={'7'} style={styles.statsNumber} />
                <RobotoRegular name={'Approve'} style={styles.statsLabel} />
              </View>
            </View>

            <View style={styles.leaveMetaRow}>
              <View style={styles.leaveTypeSection}>
                <RobotoBold name={'Leave Type'} style={styles.metaLabel} />
                <RobotoBold
                  name={'Ex Pakistan'}
                  style={styles.leaveTypeValue}
                />
              </View>

              <View style={styles.requestedDateSection}>
                <RobotoBold name={'Requested Date'} style={styles.metaLabel} />
                <RobotoBold
                  name={'09/04/2024'}
                  style={styles.requestedDateValue}
                />
              </View>
            </View>

            <View style={styles.reasonContainer}>
              <RobotoBold name={'Reason'} style={styles.reasonLabel} />
              <RobotoRegular
                name={
                  "I kindly request a 10-day leave for travel to Dubai. I'll ensure tasks are delegated and remain reachable for urgent matters."
                }
                style={styles.reasonText}
              />
            </View>
          </View>

          <Select
            options={selectOptions}
            container={{ marginTop: vh * 2 }}
            value={selectedOption}
            onSelectOption={setSelectedOption}
            placeholder={'Please Selects'}
          />

          <View style={styles.apprvalContainer}>
            <RobotoBold
              style={styles.approvalHeading}
              name={'APPROVAL PROCESS'}
            />
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.level1Container}>
                <RobotoBold style={styles.approvalText} name={'level 1'} />
                <RobotoRegular
                  style={[styles.levelText, styles.approvalText]}
                  name={'Team Lead'}
                />
                <RobotoRegular
                  style={[styles.levelText, styles.approvalText]}
                  name={'M asalam khalid'}
                />
              </View>

              <View style={styles.level2Container}>
                <RobotoBold style={styles.approvalText} name={'level 1'} />
                <RobotoRegular
                  style={[styles.levelText, styles.approvalText]}
                  name={'Team Lead'}
                />
                <RobotoRegular
                  style={[styles.levelText, styles.approvalText]}
                  name={'M asalam khalid'}
                />
              </View>

              <View style={styles.level3Container}>
                <RobotoBold style={styles.approvalText} name={'level 1'} />
                <RobotoRegular
                  style={[styles.levelText, styles.approvalText]}
                  name={'Team Lead'}
                />
                <RobotoRegular
                  style={[styles.levelText, styles.approvalText]}
                  name={'M asalam khalid'}
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleApprove} style={{ flex: 1 }}>
              <Button
                containerStyle={styles.approveButton}
                titleStyle={{ color: COLORS.white }}
                title={'Approve'}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleReject} style={{ flex: 1, }}>
              <Button
                containerStyle={styles.rejectButton}
                titleStyle={{ color: COLORS.white }}
                title={'Reject'}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
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

export default PendingApproval;
