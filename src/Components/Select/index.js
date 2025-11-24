import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import { icons } from '../../Assets';
import RobotoBold from '../RobotoBold';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';
import { pick, types } from '@react-native-documents/picker';
import { Calendar } from 'react-native-calendars';

const Select = ({
  label,
  placeholder,
  options,
  onSelectOption,
  type,
  name,
  value,
  container,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const onPressAttachment = async () => {
    try {
      const results = await pick({ type: [types.allFiles] });
      const file = results[0];
      setSelectedFile(file.name);

      if (onSelectOption) {
        onSelectOption(name, file);
      }
    } catch (err) {
      console.log('error while uploading', err);
    }
  };

  const onSelect = item => {
    setSelectedOption(item);
    setIsVisible(false);

    if (onSelectOption) {
      if (name) {
        onSelectOption(name, item);
      } else {
        onSelectOption(item);
      }
    }
  };

  const onPressCalendar = () => setShowCalendar(true);

  const onDayPress = day => {
    setSelectedOption(day.dateString);
    if (onSelectOption) {
      onSelectOption(name, day.dateString);
    }
    setShowCalendar(false);
  };

  const handlePress = () => {
    if (type === 'file') {
      onPressAttachment();
    } else if (type === 'calender') {
      onPressCalendar();
    } else {
      setIsVisible(!isVisible);
    }
  };

  return (
    <View style={[container, styles.wrapper]}>
      <RobotoBold style={styles.label} name={label} />

      <TouchableOpacity
        style={styles.selectBox}
        activeOpacity={0.8}
        onPress={handlePress}
      >
        <Text style={selectedOption ? styles.value : styles.placeholder}>
          {selectedFile ? selectedFile : value ? value : placeholder}
        </Text>

        {type === 'file' ? (
          <Image source={icons.Attachment} style={styles.icon} />
        ) : (
          <Image source={icons.arrowDown} style={styles.icon} />
        )}
      </TouchableOpacity>

      {isVisible && options && (
        <View style={styles.dropdown}>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => onSelect(item)}
            >
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Modal visible={showCalendar} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [selectedOption]: {
                selected: true,
                selectedColor: COLORS.primary,
              },
            }}
          />
          <TouchableOpacity
            onPress={() => setShowCalendar(false)}
            style={styles.closeButton}
          >
            <Text style={{ color: 'white' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  wrapper: {
    // borderWidth:2,
  },
  label: {
    position: 'absolute',
    top: vh * -1,
    left: vw * 2,
    backgroundColor: '#fff',
    paddingHorizontal: 4,
    fontSize: vw * 3,
    color: '#555',
    zIndex: 1,
  },
  selectBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  placeholder: {
    fontSize: 14,
    color: '#888',
  },
  value: {
    fontSize: 14,
    color: '#000',
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  dropdown: {
    position: 'absolute',
    top: vh * 6.5,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    zIndex: 1000,
    elevation: 5,
  },
  option: {
    paddingVertical: vh * 1.5,
    paddingHorizontal: vw * 3,
    borderBottomWidth: 0.5,
    borderColor: COLORS.cardBorderColor,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  closeButton: {
    backgroundColor: COLORS.primary,
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
});
