import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {AppStackParamList} from '../../App';
import {color} from '../../theme/color';

export type A003SpringDecayTimePropsType = NativeStackScreenProps<
  AppStackParamList,
  'A003SpringDecayTime'
>;
export const A003SpringDecayTimeScreen: React.FC<
  A003SpringDecayTimePropsType
> = () => {
  const opacityAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const translateXAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const reset = () => {
    Animated.parallel([
      Animated.timing(opacityAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateXAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const hide = () => {
    Animated.timing(opacityAnimatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const showOpacitySpring = () => {
    Animated.spring(opacityAnimatedValue, {
      toValue: 1,
      bounciness: 15,
      useNativeDriver: true,
    }).start();
  };

  const showOpacityDecay = () => {
    Animated.decay(opacityAnimatedValue, {
      velocity: 15,
      useNativeDriver: true,
    }).start();
  };

  const showOpacityTiming = () => {
    Animated.timing(opacityAnimatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const showTranslateXSpring = () => {
    opacityAnimatedValue.setValue(1);

    Animated.spring(translateXAnimatedValue, {
      toValue: 100,
      bounciness: 15,
      useNativeDriver: true,
    }).start();
  };

  const showTranslateXDecay = () => {
    opacityAnimatedValue.setValue(1);

    Animated.decay(translateXAnimatedValue, {
      velocity: 1,
      useNativeDriver: true,
    }).start();
  };

  const showTranslateXTiming = () => {
    Animated.sequence([
      Animated.timing(opacityAnimatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(translateXAnimatedValue, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(translateXAnimatedValue, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: true, // this action to pause this animation
      }),
      Animated.timing(translateXAnimatedValue, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimatedValue, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const actionList = [
    {
      title: 'Hide',
      onPress: hide,
    },
    {
      title: 'Show Opacity Spring',
      onPress: showOpacitySpring,
    },
    {
      title: 'Show Opacity Decay',
      onPress: showOpacityDecay,
    },
    {
      title: 'Show Opacity Timing',
      onPress: showOpacityTiming,
    },
    {
      title: 'Show Translate X Spring',
      onPress: showTranslateXSpring,
    },
    {
      title: 'Show Translate X Decay',
      onPress: showTranslateXDecay,
    },
    {
      title: 'Show Translate X Timing',
      onPress: showTranslateXTiming,
    },
    {
      title: 'Reset',
      onPress: reset,
    },
  ];

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {opacity: opacityAnimatedValue},
          {
            transform: [{translateX: translateXAnimatedValue}],
          },
        ]}
      />

      <View style={styles.actions}>
        {actionList.map(({title, onPress}) => (
          <Button key={title} title={title} onPress={onPress} />
        ))}
      </View>
      {/* <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Step1: add value need transform
        </Text>
        <Text style={styles.descriptionText}>
          Step2: to animate this use Animated.decay, Animated.sprint,
          Animated.time
        </Text>
      </View> */}
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
