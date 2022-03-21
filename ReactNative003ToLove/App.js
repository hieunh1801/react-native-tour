import React from 'react';
import type {Node} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {AppColor, AppFont, AppRouteName} from './src/constants/app.constants';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import menuIcon from './src/assets/icons/menu.png';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import MyAccountScreen from "./src/screens/MyAccountScreen";

const MenuIcon = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={menuIcon} style={styles.menuIcon} />
    </TouchableOpacity>
  );
};

const AppDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={AppRouteName.Home} component={HomeScreen} />
      <Drawer.Screen name={AppRouteName.Detail} component={DetailScreen} />
      <Drawer.Screen name={AppRouteName.myAccountScreen} component={MyAccountScreen}
    </Drawer.Navigator>
  )
}

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();

  // return <HomeScreen />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AppRouteName.splashScreen}
        screenOptions={{
          headerStyle: {
            backgroundColor: AppColor.white,
          },
          headerTintColor: '#fff',
          headerTitle: props => <MenuIcon {...props} />,
        }}>
        <Stack.Screen name={AppRouteName.splashScreen} component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name={AppRouteName.loginScreen} component={LoginScreen} options={{headerShown: false}} />

        <Stack.Screen name={AppRouteName.homeScreen} component={HomeScreen} />
        <Stack.Screen name={AppRouteName.detailScreen} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
