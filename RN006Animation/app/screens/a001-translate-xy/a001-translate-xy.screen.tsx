import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import {AppStackParamList} from '../../App';
import {color} from '../../theme/color';

export type A001TranslateXYPropsType = NativeStackScreenProps<
  AppStackParamList,
  'A001TranslateXY'
>;
export const A001TranslateXYScreen: React.FC<A001TranslateXYPropsType> = () => {
  const translateYAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const translateXAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const translateYIn = () => {
    Animated.timing(translateYAnimatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const translateYOut = () => {
    Animated.timing(translateYAnimatedValue, {
      toValue: 100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const translateXIn = () => {
    Animated.timing(translateXAnimatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const translateXOut = () => {
    Animated.timing(translateXAnimatedValue, {
      toValue: 100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateY: translateYAnimatedValue,
              },
              {
                translateX: translateXAnimatedValue,
              },
            ],
          },
        ]}
      />
      <View style={styles.actions}>
        <Button title="Translate Y In" onPress={translateYIn} />
        <Button title="Translate Y Out" onPress={translateYOut} />
      </View>
      <View style={styles.actions}>
        <Button title="Translate X In" onPress={translateXIn} />
        <Button title="Translate X Out" onPress={translateXOut} />
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Step1: add translateYAnimatedValue
        </Text>
        <Text style={styles.descriptionText}>
          Step2: to animate this use Animated.decay, Animated.sprint,
          Animated.time
        </Text>
        <Text style={styles.descriptionText}>
          Step3: Because of animate Y will change the position of the box.
          {'\n'}So need to add position: 'absolute' or scale space of the box.
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
