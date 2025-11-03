import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import { styles } from './style';
import Select from '../../Components/Select';
import PaySlipCard from '../PaySlip/component/PaySlip';
import endpoints from '../../apis/endpoints';
import { get } from '../../apis';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';


const TaxCertificate = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

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


  const openPdf = async (base64Data) => {
  try {
    const path = `${RNFS.DocumentDirectoryPath}/tax_certificate.pdf`;
    await RNFS.writeFile(path, base64Data, 'base64');
    await FileViewer.open(path);
  } catch (err) {
    console.error('Error opening PDF:', err);
  }
};


  const fetchTaxCertificate = async () => {
    try {
      const res = await get(endpoints.documents.generateTaxCertifcate);
      console.log(res, 'tax certificate endpoint');
      if (res?.data?.file) {
        const base64Data = res.data.data;
        openPdf(base64Data);
      }
    } catch (error) {
      console.error('Error fetching tax certificate:', error);
    }
  };

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      fetchTaxCertificate();
    }
  }, [selectedYear, selectedMonth]);

  return (
    <View style={styles.container}>
      <Header />
      <TopView name={'Tax Documents'} />

      <CurvedView>
        <View style={styles.curvedViewContainer}>
          <Select
            label={'Select Fiscal Year'}
            placeholder={'-- Select Year --'}
            options={selectYears}
            onSelectOption={setSelectedYear}
          />

          {selectedYear && (
            <Select
              label={'Select Fiscal Month'}
              placeholder={'-- Select Month --'}
              options={selectMonths}
              onSelectOption={setSelectedMonth}
            />
          )}

          {selectedYear && selectedMonth && (
            <View style={{ marginTop: 20 }}>
              <PaySlipCard year={selectedYear} month={selectedMonth} />
            </View>
          )}
        </View>
      </CurvedView>
    </View>
  );
};

export default TaxCertificate;
