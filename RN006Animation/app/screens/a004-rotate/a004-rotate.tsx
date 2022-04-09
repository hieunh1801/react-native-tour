import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Animated, Button, Easing, StyleSheet, Text, View} from 'react-native';
import {AppStackParamList} from '../../App';
import {color} from '../../theme/color';

export type A004RotatePropsType = NativeStackScreenProps<
  AppStackParamList,
  'A004Rotate'
>;
export const A004RotateScreen: React.FC<A004RotatePropsType> = () => {
  const rotateAnimatedValue = React.useRef(new Animated.Value(1)).current;
  const rotateValue = rotateAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const reset = () => {
    rotateAnimatedValue.setValue(0);
  };

  const rotate = () => {
    Animated.timing(rotateAnimatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{rotate: rotateValue}],
          },
        ]}
      />
      <View style={styles.actions}>
        <Button title="Rotate" onPress={rotate} />
        <Button title="Reset" onPress={reset} />
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Step1: add value need transform
        </Text>
        <Text style={styles.descriptionText}>
          Step2: to animate this use Animated.decay, Animated.sprint,
          Animated.time
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: color.secondary,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 30,
  },
  description: {
    width: '100%',
    marginTop: 10,
    borderTopColor: '#c4c4c4',
    borderTopWidth: 0.8,
    paddingTop: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 10,
  },
});
