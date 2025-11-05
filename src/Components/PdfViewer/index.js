import React from 'react';
import { View } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfViewer = ({ route }) => {
  const { base64 } = route.params;
  const source = { uri: `data:application/pdf;base64,${base64}` };

  return (
    <View style={{ flex: 1 }}>
      <Pdf
        source={source}
        trustAllCerts={false}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default PdfViewer;