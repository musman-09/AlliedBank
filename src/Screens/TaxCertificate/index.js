import {
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './style';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import Select from '../../Components/Select';
import PdfViewCard from '../../Components/PdfViewCard';
import RobotoBold from '../../Components/RobotoBold';
import Pdf from 'react-native-pdf';
import { get } from '../../apis';
import endpoints from '../../apis/endpoints';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';


const TaxCertificate = ({ navigation }) => {
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
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      generateTaxCertificate();
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
      if (!permissionGranted) return;

      const fileName = `PaySlip_${selectedMonth}_${selectedYear}.pdf`;
      const dir =
        Platform.OS === 'android'
          ? RNFetchBlob.fs.dirs.DownloadDir
          : RNFS.DocumentDirectoryPath;

      const filePath = `${dir}/${fileName}`;

      await RNFetchBlob.fs.writeFile(filePath, item, 'base64');

      if (Platform.OS === 'android') {
        await RNFetchBlob.android.addCompleteDownload({
          title: fileName,
          description: 'Pay Slip PDF',
          mime: 'application/pdf',
          path: filePath,
          showNotification: true,
          notification: true,
        });
      }

      Alert.alert(
        'Download Complete',
        'Your pay slip has been downloaded successfully!',
      );
    } catch (error) {
      console.log('Error downloading file:', error);
      Alert.alert('Error', 'Failed to download the file. Please try again.');
    }
  };

  const generateTaxCertificate = async () => {
    try {
      setLoading(true);
      setPdfData(null);

      const res = await get(`${endpoints.documents.generateTaxCertifcate}`);


      if (res?.data) {
        const data = Array.isArray(res.data) ? res.data : [res.data];
        setPdfData(data);
      }
    } catch (error) {
      console.log('Error fetching tax certificate:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Tax Certificate'} />

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
              name={'Loading tax certificate...'}
            />
          )}

          {!loading && pdfData && (
            <FlatList
              data={pdfData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={{ marginTop: 10 }}>
                  <PdfViewCard
                    name={`Tax Certificate ${selectedMonth} - ${selectedYear}`}
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
          <Header toggleDrawer={() => setVisible(false)} />

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

export default TaxCertificate;
