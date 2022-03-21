import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AppFont, AppRouteName} from '../constants/app.constants';
import logo from '../assets/icons/logo.png';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace(AppRouteName.loginScreen);
  }, 1000);

  const appTitle = 'ABC Media';

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.appTitle}>{appTitle}</Text>
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
  logo: {
    width: 100,
    height: 100,
  },
  appTitle: {
    marginTop: 32,
    fontSize: 32,
    fontFamily: AppFont.medium,
  },
});

export default SplashScreen;
