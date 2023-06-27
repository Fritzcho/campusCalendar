import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Schema = () => {
  const scheduleEvents = [];
  let i = 0;
  let iPlus = 1;
  for (i = 0; i < sessionStorage.length; i++) {
    scheduleEvents[i] = sessionStorage.getItem("Date" + iPlus);
    iPlus++;
  }

  // Extract the day, month, hours, and minutes from the date string
  const getDay = (date) => parseInt(date.substr(6, 2));
  const getMonth = (date) => parseInt(date.substr(4, 2));
  const getHours = (date) => parseInt(date.substr(9, 2));
  const getMinutes = (date) => parseInt(date.substr(11, 2));

  // Create an object to store events for each day
  const eventsByDay = {};

  // Group events by day
  scheduleEvents.forEach((event) => {
    const date = event.substr(0, 8);
    const eventType = event.substring(event.indexOf(' ') + 1);

    const day = getDay(date);
    const month = getMonth(date);
    const hours = getHours(event);
    const minutes = getMinutes(event);

    if (!eventsByDay[month]) {
      eventsByDay[month] = {};
    }

    if (!eventsByDay[month][day]) {
      eventsByDay[month][day] = [];
    }

    eventsByDay[month][day].push({ eventType, hours, minutes });
  });

  // Get the number of days in a month
  const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

  // Get the name of the month
  const getMonthName = (month) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month - 1];
  };

  // Get the current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  // Create an array of months starting from the current month
  const months = Array.from(Array(12), (_, index) => (currentMonth + index) % 12 + 1);

  // Render the calendar
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.calendarContainer}>
        {months.map((month, index) => {
          const year = currentYear + Math.floor((currentMonth + index - 1) / 12);
          const daysInMonth = getDaysInMonth(month, year);

          return (
            <View key={month} style={styles.monthContainer}>
              <Text style={styles.monthText}>{getMonthName(month)} {year}</Text>
              <View style={styles.calendarRow}>
                {Array.from(Array(daysInMonth), (_, index) => index + 1).map((day) => {
                  const events = eventsByDay[month] && eventsByDay[month][day];

                  return (
                    <View key={day} style={styles.calendarCell}>
                      <Text style={styles.dayText}>{day}</Text>
                      {events && (
                        <View style={styles.eventContainer}>
                          {events.map((event, index) => (
                            <Text key={index} style={styles.eventText}>
                              {`${event.eventType} (${event.hours}:${event.minutes})`}
                            </Text>
                          ))}
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  calendarContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  monthContainer: {
    marginBottom: 20,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  calendarRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarCell: {
    width: '14.28%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventContainer: {
    marginTop: 5,
  },
  eventText: {
    fontSize: 12,
  },
});

export default Schema;
