import React, {useRef, useState} from 'react';
import {
  Animated,
  Button,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';

export const A004BottomView = props => {
  const {height, width} = useWindowDimensions();
  const positionViewAnimated = useRef(new Animated.Value(height)).current;
  const opacityAnimated = useRef(new Animated.Value(0)).current;
  const positionPopupAnimated = useRef(new Animated.Value(height)).current;
  const [popupHeight, setPopupHeight] = useState<number>(100);

  const open = () => {
    Animated.sequence([
      Animated.timing(positionViewAnimated, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimated, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(positionPopupAnimated, {
        toValue: 0,
        bounciness: 8,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const close = () => {
    Animated.sequence([
      Animated.timing(positionViewAnimated, {
        toValue: height,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(positionPopupAnimated, {
        toValue: height,
        bounciness: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <View style={styles.container}>
      <Text>Translate with Y</Text>
      <Button title="Open" onPress={open} />
      <Button title="Close" onPress={close} />
      <Animated.View
        style={[
          styles.popupContainer,
          {
            width: width,
            height: height,
            opacity: opacityAnimated,
            transform: [{translateY: positionViewAnimated}],
          },
        ]}>
        <Animated.View
          style={[
            styles.popup,
            {
              transform: [{translateY: positionPopupAnimated}],
            },
          ]}>
          <Image
            source={{
              uri: 'https://genk.mediacdn.vn/k:thumb_w/690/2016/41065-4954269-372536-1460027910211/lia-chao-thien-than-coser-den-tu-dai-loan.jpg',
            }}
            style={styles.image}
          />
          <Button title="Close" onPress={close} />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: 200,
    height: '90%',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flex: 1,
  },

  popupContainer: {
    position: 'absolute',
    zIndex: 99999,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
  } as ViewStyle,
  popup: {
    minHeight: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'absolute',
    borderRadius: 5,
    elevation: 10,
  },
});
