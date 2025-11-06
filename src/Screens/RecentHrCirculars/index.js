import { View, FlatList, Modal, TouchableOpacity, Alert } from 'react-native';
import React, { useCallback, useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import { styles } from './style';
import EmployeeCard from '../../Components/EmployeeCard';
import { useFocusEffect } from '@react-navigation/native';
import { get } from '../../apis';
import endpoints from '../../apis/endpoints';
import { vh } from '../../Assets/themes/dimension';
import moment from 'moment';
import InputFeild from '../../Components/InputFeild';
import { icons } from '../../Assets';
import Pdf from 'react-native-pdf';
import RobotoBold from '../../Components/RobotoBold';

const RecentHrCirculars = () => {
  const [hrCircularsData, setHrCircularData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [pdfSource, setPdfSource] = useState(null);

  const fetchHrCirculars = async () => {
    try {
      const res = await get(endpoints.general.getLinks);
      const formatted = res.data.useFullLinks?.map(item => ({
        title: item?.linkName ?? '--',
        description: item?.description ?? '--',
        url: item?.linkUrl ?? '--',
        createdOn: item?.createdOn
          ? moment(item?.createdOn).format('DD-MMM-YYYY')
          : '--',
      }));
      setHrCircularData(formatted);
    } catch (error) {
      console.log('Error fetching HR circulars:', error);
      Alert.alert('Error', 'Failed to load HR Circulars.');
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchHrCirculars();
    }, []),
  );

  const onView = item => {
    console.log(item?.url, 'url i got');
    if (!item?.url) {
      Alert.alert('nh mil rha url');
      return;
    }

    setPdfSource({ uri: item?.url, cache: true });
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Recent HR Circulars'} />

      <CurvedView>
        <View style={styles.curvedViewContainer}>
          <InputFeild eyeOpen={icons.eyeClose} placeholder={'Search'} />

          <FlatList
            data={hrCircularsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <EmployeeCard onViewDownload={() => onView(item)} data={item} />
            )}
            contentContainerStyle={{ gap: vh * 2 }}
          />
        </View>
      </CurvedView>

      <Modal visible={visible} animationType="slide">
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{ padding: 15, backgroundColor: '#000' }}
          >
            <RobotoBold
              name="Close Document"
              style={{ color: '#fff', textAlign: 'center' }}
            />
          </TouchableOpacity>

          {pdfSource && (
            <Pdf
              source={pdfSource}
              style={{ flex: 1 }}
              trustAllCerts={false}
              onError={error => {
                console.log('PDF load error:', error);
                Alert.alert(
                  'Error',
                  'Unable to open this file. It may not be a PDF.',
                );
              }}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

export default RecentHrCirculars;
