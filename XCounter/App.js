import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CalendarModule} from './app/native-module/calendar';

const App = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <View style={styles.screen}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{counter}</Text>
      </View>
      <View style={styles.actionList}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            setCounter(c => c + 1);
          }}>
          <Text style={styles.actionText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            setCounter(c => c - 1);
          }}>
          <Text style={styles.actionText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            CalendarModule.createCalendarEvent('testName', 'testLocation');
          }}>
          <Text style={styles.actionText}>Call CalendarModule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  actionList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  actionButton: {
    paddingVertical: 15,
    borderRadius: 2,
    backgroundColor: '#d2d2d2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default App;
