import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
export const A003TranslateX = () => {
  const xAnimate = useRef(new Animated.Value(0)).current;

  const toRight = () => {
    Animated.spring(xAnimate, {
      toValue: 100,
      useNativeDriver: true,
    }).start();
  };
  const toLeft = () => {
    Animated.timing(xAnimate, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text>Translate X</Text>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [{translateX: xAnimate}],
          },
        ]}
      />
      <Button title="To right" onPress={toRight} />
      <Button title="To left" onPress={toLeft} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
  },
});
