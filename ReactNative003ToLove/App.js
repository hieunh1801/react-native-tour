import 'react-native-gesture-handler';

import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AppColor, AppFont, AppRouteName} from './src/constants/app.constants';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import menuIcon from './src/assets/icons/menu.png';
import BuildCalendarScreen from './src/screens/BuildCalendarScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import ManageBookingScreen from './src/screens/ManageBookingScreen';
import SelectProfilePictureScreen from './src/screens/SelectProfilePictureScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import MyAccountScreen from './src/screens/MyAccountScreen';
import TierUpgradeScreen from './src/screens/TierUpgradeScreen';
import UpcomingEventsScreen from './src/screens/UpcomingEventsScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const MenuIcon = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={menuIcon} style={styles.menuIcon} />
    </TouchableOpacity>
  );
};

const AppDrawer = () => {
  const Drawer = createDrawerNavigator();
  console.log(Drawer);
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={AppRouteName.homeScreen} component={HomeScreen} />
      <Drawer.Screen name={AppRouteName.manageBookingScreen} component={ManageBookingScreen} />
      <Drawer.Screen name={AppRouteName.myAccountScreen} component={MyAccountScreen} />
      <Drawer.Screen name={AppRouteName.upcomingEventsScreen} component={UpcomingEventsScreen} />
      <Drawer.Screen name={AppRouteName.manageOffersScreen} component={ManageBookingScreen} />
      <Drawer.Screen name={AppRouteName.tierUpgradeScreen} component={TierUpgradeScreen} />
      <Drawer.Screen name={AppRouteName.buildCalendarScreen} component={BuildCalendarScreen} />
      <Drawer.Screen name={AppRouteName.settingsScreen} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const App1 = () => {
  const Stack = createNativeStackNavigator();
  console.info('App.js');
  // return <HomeScreen />;
  return (
    <NavigationContainer>
      {/*<Stack.Navigator*/}
      {/*  initialRouteName={AppRouteName.splashScreen}*/}
      {/*  screenOptions={{*/}
      {/*    headerStyle: {*/}
      {/*      backgroundColor: AppColor.white,*/}
      {/*    },*/}
      {/*    headerTintColor: '#ffffff',*/}
      {/*    headerTitle: props => <MenuIcon {...props} />,*/}
      {/*  }}>*/}
      {/*  <Stack.Screen name={AppRouteName.splashScreen} component={SplashScreen} options={{headerShown: false}} />*/}
      {/*  <Stack.Screen name={AppRouteName.loginScreen} component={LoginScreen} options={{headerShown: false}} />*/}
      {/*  <Stack.Screen name={AppRouteName.appDrawer} component={AppDrawer} />*/}
      {/*</Stack.Navigator>*/}
      <AppDrawer></AppDrawer>
    </NavigationContainer>
  );
};

const App = () => {
  return <RegisterScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: AppColor.primary,
    fontFamily: AppFont.bold,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
});

export default App;
