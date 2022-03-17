import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {AppColor} from './src/constants/app.constants';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Hello WOrld</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
