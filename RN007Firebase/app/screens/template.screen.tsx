import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Fire00 = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
