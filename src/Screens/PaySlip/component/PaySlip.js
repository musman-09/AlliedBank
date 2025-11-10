import { View, Text } from 'react-native';
import React from 'react';

const PaySlipCard = ({ year, month }) => {
  return (
    <View>
      <Text>
        Showing payslip for {month} {year}
      </Text>
    </View>
  );
};

export default PaySlipCard;
