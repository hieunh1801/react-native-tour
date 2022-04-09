import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import {AppStackParamList} from '../../App';
import {color} from '../../theme/color';

export type A002FadeInOutPropsType = NativeStackScreenProps<
  AppStackParamList,
  'A002FadeInOut'
>;
export const A002FadeInOutScreen: React.FC<A002FadeInOutPropsType> = () => {
  const opacityAnimatedValue = React.useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacityAnimatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacityAnimatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {opacity: opacityAnimatedValue}]} />
      <View style={styles.actions}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
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
