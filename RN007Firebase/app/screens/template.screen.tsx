import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Fire00 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 2,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textError: {
    color: 'red',
  },
});
