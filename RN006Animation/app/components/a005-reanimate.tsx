import React, {useEffect, useState} from 'react';
import {Button, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const A005AnimateBox = () => {
  const offset = useSharedValue(0);
  const [allowTransform, setAllowTransform] = useState(false);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });

  useEffect(() => {
    if (allowTransform) {
      const interval = setInterval(() => {
        offset.value = withSpring(Math.random());
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [offset, allowTransform]);

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        title="Toggle transform"
        onPress={() => {
          setAllowTransform(value => !value);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderRadius: 30,
    backgroundColor: '#f3f3f3',
  },
});
