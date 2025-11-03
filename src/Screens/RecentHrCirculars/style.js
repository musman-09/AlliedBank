import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  curvedViewContainer: {
    gap: vh * 2,
  },

  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: vw * 3,
    // borderWidth: 2,
    marginTop: vh * 1.5,
  },
});

// import React from 'react';
// import { View } from 'react-native';
// import Pdf from 'react-native-pdf';
// import styles from './styles';
// import SubHeader from '../../components/SubHeader';
// import BackgroundWrapper from '../../components/BackgroundWrapper';

// const PdfView = ({ route }) => {
//   const { data, url } = route?.params || {};
//   const base64 = `data:application/pdf;base64,${data}`;
//   return (
//     <View style={styles.container}>
//       <SubHeader heading={'Pdf View'} />
//       <BackgroundWrapper isCurved>
//         <Pdf
//           source={{
//             uri: data ? base64 : url,
//             cache: true,
//           }}
//           trustAllCerts={false}
//           style={styles.pdf}
//         />
//       </BackgroundWrapper>
//     </View>
//   );
// };

// export default PdfView;
