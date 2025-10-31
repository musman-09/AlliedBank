import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { icons } from '../../Assets';
import RobotoBold from '../RobotoBold';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';

const Select = ({ label, placeholder, options  , onSelectOption}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onPressDropDown = () => {
    setIsVisible(!isVisible);
  };

  const onSelect = item => {
    setSelectedOption(item);
    setIsVisible(false);
     if (onSelectOption) {
      onSelectOption(item); 
    }
  };
  return (
    <View style={styles.wrapper}>
      <RobotoBold style={styles.label} name={label} />

      <TouchableOpacity
        style={styles.selectBox}
        activeOpacity={0.8}
        onPress={onPressDropDown}
      >
        <Text style={ selectedOption ? styles.value : styles.placeholder}>
          {selectedOption ? selectedOption : placeholder}
        </Text>
        <Image source={icons.arrowDown} style={styles.icon} />
      </TouchableOpacity>

      {isVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => onSelect(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}


    </View>


  );
};

export default Select;

const styles = StyleSheet.create({
  wrapper: {
    // marginVertical: 10,
    // borderWidth:2
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
    // borderWidth:2
    // backgroundColor: "yellow",
  },
  placeholder: {
    fontSize: 14,
    color: '#888',
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
});
