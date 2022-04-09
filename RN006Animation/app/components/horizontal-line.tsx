import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HorizontalLine = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
  },
});
