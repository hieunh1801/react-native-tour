import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {STACK_LIST} from '../../navigators/app-stack';

export const HomeScreen = () => {
  const stackList = STACK_LIST;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {stackList.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => {
              navigation.navigate(item.name);
            }}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
});
