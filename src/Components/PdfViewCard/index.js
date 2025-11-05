import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { COLORS } from '../../Assets/themes/color';
import { icons } from '../../Assets';
import { vh, vw } from '../../Assets/themes/dimension';

const PdfViewCard = ({ name, onView, onDownload }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.leftContainer}>
        <Image
          source={icons.pdfIcon}
          style={styles.pdfIcon}
          resizeMode="contain"
        />
        <Text style={styles.fileName} numberOfLines={1}>
          {name}
        </Text>
      </View>

      
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={onDownload}>
          <Image
            source={icons.pdfDownloadIcon} 
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onView}>
          <Image
            source={icons.pdfViewIcon} 
            style={[styles.icon, { marginLeft: vw * 3 }]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PdfViewCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: vw * 3,
    paddingVertical: vh * 1.5,
    borderRadius: vw * 2,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: COLORS.white,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  pdfIcon: {
    width: vw * 6,
    height: vw * 6,
    marginRight: vw * 6,
  },
  fileName: {
    fontSize: vw * 3.5,
    color: '#000',
    fontWeight: '500',
    flexShrink: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: vw * 5,
    height: vw * 5,
  },
});
