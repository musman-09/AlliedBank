import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import { Calendar, CalendarProvider } from 'react-native-calendars';
import { vh, vw } from '../../Assets/themes/dimension';
import CurvedView from '../../Components/CurvedView';
import { COLORS } from '../../Assets/themes/color';
import RobotoBold from '../../Components/RobotoBold';
import { styles } from './style';

const AttendanceStatus = () => {
  const [selected, setSelected] = useState('');

  console.log(selected, 'selected date');

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <TopView name={'Attendance Status'} />

      <CurvedView>
        <View style={styles.calenderContainer}>
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
            style={{
              // elevation: 3,
              borderRadius: vw * 2,
              // marginVertical: vh * 5,
              // backgroundColor: COLORS.white,
              // marginHorizontal: vw * 2,
            }}
            theme={{
              backgroundColor: COLORS.orange,
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#dd99ee',
              textDayFontSize: vw * 4,
            }}
          />

          <View style={styles.identifier}>
            <View style={styles.leave}>
              <View style={styles.squareBlue}>


              </View>
              <RobotoBold name={'On Leave'} />
            </View>


              <View style={styles.leave}>
              <View style={styles.squarePink}>

                
              </View>
              <RobotoBold name={'Absent'} />
            </View>


              <View style={styles.leave}>
              <View style={styles.squareGreen}>

                
              </View>
              <RobotoBold name={'Holiday'} />
            </View>


              <View style={styles.leave}>
              <View style={styles.squareOrange}>

                
              </View>
              <RobotoBold name={'Present With Violation'} />
            </View>
          </View>
        </View>
      </CurvedView>
    </View>
  );
};

export default AttendanceStatus;
