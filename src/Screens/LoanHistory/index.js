import { ScrollView, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import { styles } from './style';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import BarGraph from '../../Components/BarGraph';
import { COLORS } from '../../Assets/themes/color';
import RobotoBold from '../../Components/RobotoBold';
import Tabs from '../../Components/Tabs';
import DisplayTable from '../../Components/DisplayTable';
import endpoints from '../../apis/endpoints';
import { get } from '../../apis';
import Loader from '../../Components/Loader';
import NoDataFound from '../../Components/NoDataFound';

const LoanHistory = () => {
  const [loanTableData, setLoanTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loanBarData, setLoanBarData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('House Building');

  const getLoansTableData = async () => {
    try {
      setLoading(true);
      const res = await get(endpoints.loan.history);

      const apiData =
        res?.data?.map(item => ({
          payMonth: item?.payMonth.split('T')[0],
          paymentDate: item?.paymentDate.split('T')[0],
          installationAmount: item?.installmentAmount,
          loanType: item?.loanType,
          totalAmountPaid: item?.totalAmountPaid,
          totalDueLoan: item?.totalDueLoan,
        })) || [];

      const monthData = [];

      apiData.forEach(item => {
        const month = item.payMonth.slice(0, 7);

        const existing = monthData.find(m => m.month === month);

        if (existing) {
          existing.paid += item.totalAmountPaid;
          existing.due += item.totalDueLoan;
        } else {
          monthData.push({
            month,
            paid: item.totalAmountPaid,
            due: item.totalDueLoan,
          });
        }
      });

      const getMonthName = num => {
        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        return months[num - 1];
      };

      const barGraphData = [];
      monthData.forEach(item => {
        barGraphData.push({
          value: item.paid / 100,
          label: getMonthName(Number(item.month.split('-')[1])),
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: { color: 'gray' },
          frontColor: COLORS.orange,
        });

        barGraphData.push({
          value: item.due / 100,
          frontColor: COLORS.blue,
        });
      });

      setLoanBarData(barGraphData);

      const tabToLoanType = {
        'House Building': 'House Building',
        'House Finance': 'Car Lease',
        'Personal Finance': 'Personal Loan',
        'Care Ijara': 'Motorcycle Loan',
        'Care Lease': 'Care Lease',
      };

      const selectedLoanType = tabToLoanType[selectedTab];
      const filteredData = apiData.filter(
        item => item.loanType === selectedLoanType,
      );

      setLoanTableData(filteredData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const tableCellHeading = ['Pay Month', 'Pay Date', 'Installment Amount'];

  useEffect(() => {
    getLoansTableData();
  }, [selectedTab]);

  return (
    <View style={styles.container}>
      <Header />

      <TopView name={'Active Loans'} />
      <CurvedView>
        {loading ? (
          <Loader containerStyle={styles.loadercontainer} />
        ) : (
          <>
            <View style={styles.graphContainer}>
              <BarGraph data={loanBarData} />
            </View>
            <RobotoBold name={'Loan History'} />
            <View style={styles.tabsContainer}>
              <Tabs
                onPress={() => setSelectedTab('House Building')}
                name={'House Building'}
                container={styles.tabContainer}
                labelStyle={styles.labelStyle}
                isActive={selectedTab === 'House Building'}
              />
              <Tabs
                onPress={() => setSelectedTab('House Finance')}
                name={'House Finance'}
                isActive={selectedTab === 'House Finance'}
                container={styles.tabContainer}
                labelStyle={styles.labelStyle}
              />
              <Tabs
                name={'Personal Finance'}
                onPress={() => setSelectedTab('Personal Finance')}
                container={styles.tabContainer}
                isActive={selectedTab === 'Personal Finance'}
                labelStyle={styles.labelStyle}
              />
              <Tabs
                name={'Care Ijara'}
                onPress={() => setSelectedTab('Care Ijara')}
                isActive={selectedTab === 'Care Ijara'}
                container={styles.tabContainer}
                labelStyle={styles.labelStyle}
              />
              <Tabs
                name={'Care Lease'}
                isActive={selectedTab === 'Care Lease'}
                onPress={() => setSelectedTab('Care Lease')}
                container={styles.tabContainer}
                labelStyle={styles.labelStyle}
              />
            </View>

        
            <View style={styles.table}>
              {loanTableData.length > 0 ? (
                <DisplayTable
                  data={loanTableData}
                  tableCellHeading={tableCellHeading}
                />
              ) : (
                <NoDataFound title="No Record Found" />
              )}
            </View>
     
          </>
        )}
      </CurvedView>
    </View>
  );
};

export default LoanHistory;
