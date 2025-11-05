import { View, FlatList, Modal, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './style';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import Select from '../../Components/Select';
import PdfViewCard from '../../Components/PdfViewCard';
import endpoints from '../../apis/endpoints';
import { get } from '../../apis';
import RobotoBold from '../../Components/RobotoBold';
import Pdf from 'react-native-pdf';
import { Platform, PermissionsAndroid, Alert } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';

const PaySlip = ({ navigation }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [pdfData, setPdfData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pdfSource, setPdfSource] = useState(null);

  const selectYears = ['2024', '2023', '2022', '2021', '2020'];
  const selectMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
  ];

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      generatePaySlip();
    }
  }, [selectedYear, selectedMonth]);

  const handleView = item => {
    const base64 = `data:application/pdf;base64,${item}`;
    setPdfSource({ uri: base64 });
    setVisible(true);
  };

  const requestStoragePermission = async () => {
    try {
      if (Platform.OS === 'android' && Platform.Version < 33) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to storage to save PDF file.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        return true;
      }
    } catch (err) {
      return false;
    }
  };

  const onDownload = async item => {
    try {
      const permissionGranted = await requestStoragePermission();
      if (permissionGranted) {
        const dir =
          Platform.OS === 'android'
            ? RNFetchBlob.fs.dirs.DownloadDir
            : RNFetchBlob.fs.dirs.DocumentDir;

        const fileName = `PaySlip_${selectedMonth}_${selectedYear}.pdf`;

        const filePath = `${dir}/${fileName}`;
        await RNFetchBlob.fs.writeFile(filePath, item?.data, 'base64');
        if (Platform.OS === 'android') {
          await RNFS.scanFile(filePath)
            .then(() => console.log('Media scan complete'))
            .catch(err => console.log('Media scan failed', err));
        }
        await FileViewer.open(filePath);
        if (Platform.OS === 'android') {
          showToast({ message: 'Downloaded', type: 'success' });
        }
      }
    } catch (e) {
      console.log('Error', e);
    }
  };

  const generatePaySlip = async () => {
    try {
      setLoading(true);
      setPdfData(null);

      const res = await get(`${endpoints.payslips.generatePaySlip}`);
      console.log(res, 'response of generate pay slip');

      if (res?.data) {
        const data = Array.isArray(res.data) ? res.data : [res.data];
        setPdfData(data);
      }
    } catch (error) {
      console.log('Error fetching payslip:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Pay Slip'} />

      <CurvedView>
        <View style={styles.curvedViewContainer}>
          <Select
            label="Select Year"
            placeholder="-- Select Year --"
            options={selectYears}
            onSelectOption={setSelectedYear}
          />

          <Select
            label="Select Month"
            placeholder="-- Select Month --"
            options={selectMonths}
            onSelectOption={setSelectedMonth}
          />

          {loading && (
            <RobotoBold
              style={{ textAlign: 'center', marginTop: 20 }}
              name={'Loading pay slip...'}
            />
          )}

          {!loading && pdfData && (
            <FlatList
              data={pdfData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={{ marginTop: 10 }}>
                  <PdfViewCard
                    name={`Pay Slip ${selectedMonth} - ${selectedYear}`}
                    onView={() => handleView(item)}
                    onDownload={() => onDownload(item)}
                  />
                </View>
              )}
            />
          )}
        </View>
      </CurvedView>

      <Modal visible={visible} animationType="slide">
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{ padding: 15, backgroundColor: '#000' }}
          >
            <RobotoBold
              name="Close PDF"
              style={{ color: '#fff', textAlign: 'center' }}
            />
          </TouchableOpacity>

          {pdfSource && (
            <Pdf source={pdfSource} style={{ flex: 1 }} trustAllCerts={false} />
          )}
        </View>
      </Modal>
    </View>
  );
};

export default PaySlip;
