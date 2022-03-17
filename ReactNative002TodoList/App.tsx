import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Fonts } from './src/constants';

const App = () => {
  const imageSource: ImageSourcePropType = {
    uri: 'https://wallpapertag.com/wallpaper/full/3/4/d/121586-new-red-gradient-background-2560x1600-for-phone.jpg',
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Todo List Application</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appTitle: {
    fontSize: 30,
    color: '#032f54',
    fontFamily: Fonts.regular,
  },
  textInputContainer: {},
});

export default App;
