import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AppColor, AppFont } from '../constants/app.constants';

const DetailScreen = ({ navigation }) => {
  console.log('render detail', new Date());
  return (
    <View style={styles.container}>
      <Text>Visited at {new Date().toLocaleTimeString()}</Text>
      <Text style={styles.title}>This is detail screen at </Text>
      <Button title="Go to Details... again" onPress={() => navigation.push('Detail')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: AppColor.white,
    fontFamily: AppFont.regular,
  },
});

export default DetailScreen;
