import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SecondaryButton} from '../components/Button';
import {AppColor, AppFont} from '../constants/app.constants';

const HomeScreen = ({navigation}) => {
  console.log('render home', new Date());
  return (
    <View style={styles.container}>
      <SecondaryButton title="Go to Details" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default HomeScreen;
