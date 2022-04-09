import React, {useRef} from 'react';
import {Animated, Button, Easing, StyleSheet, Text, View} from 'react-native';

export const A002Transition = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fade In/Out using Animated.timing</Text>
      <Animated.View style={[styles.square, {opacity: fadeAnim}]} />
      <Button title="Fade in" onPress={fadeIn} />
      <Button title="Fade out" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
});
