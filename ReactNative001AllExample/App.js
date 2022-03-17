import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ScreenAnimalList from './src/screens/ScreenAnimalList';

const App = () => {
  const message = 'Hello World';
  return <ScreenAnimalList />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '50px',
  },
});

export default App;
