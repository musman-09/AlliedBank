import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import { Calendar, CalendarProvider } from 'react-native-calendars';
import { vh, vw } from '../../Assets/themes/dimension';
import CurvedView from '../../Components/CurvedView';
import { COLORS } from '../../Assets/themes/color';
import RobotoBold from '../../Components/RobotoBold';
import { styles } from './style';
import { get } from '../../apis';
import endpoints from '../../apis/endpoints';

const AttendanceStatus = () => {
  const [loading, setLoading] = useState(false);
  const [markedDates, setMarkedDates] = useState({});

  const attendanceColorMap = {
    Present: COLORS.green,
    'Present With violation': COLORS.violation,
    'Rest Day': COLORS.blue,
    'Casual Leave': COLORS.pink,
    Leave: COLORS.blue,
    'Gazzetted Holiday': COLORS.green,
  };

  const mapAttendanceToMarkedDates = attendanceArray => {
    const markedDates = {};

    attendanceArray.forEach(item => {
      const date = item.attendanceDate.split('T')[0];

      const color = attendanceColorMap[item.attendanceType] || COLORS.gray;

      markedDates[date] = {
        selected: true,
        selectedColor: color,
        disableTouchEvent: true,
      };
    });

    return markedDates;
  };

  const getAttendance = async () => {
    try {
      setLoading(true);
      const res = await get(endpoints.attendace.history);
      const apiData = res?.data || [];

      const mappedDates = mapAttendanceToMarkedDates(apiData);
      setMarkedDates(mappedDates);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAttendance();
  }, []);

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
            markedDates={markedDates}
            style={{
              // elevation: 3,
              borderRadius: vw * 2,
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
              <View style={styles.squareBlue}></View>
              <RobotoBold name={'On Leave'} />
            </View>

            <View style={styles.leave}>
              <View style={styles.squarePink}></View>
              <RobotoBold name={'Absent'} />
            </View>

            <View style={styles.leave}>
              <View style={styles.squareGreen}></View>
              <RobotoBold name={'Holiday'} />
            </View>

            <View style={styles.leave}>
              <View style={styles.squareOrange}></View>
              <RobotoBold name={'Present With Violation'} />
            </View>
          </View>
        </View>
      </CurvedView>
    </View>
  );
};

export default AttendanceStatus;
