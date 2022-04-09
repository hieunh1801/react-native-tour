import React, {useEffect} from 'react';
import {
  Animated,
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

interface BottomModalInterface {
  visible: boolean;
  onClose?: () => void;
}

export const A005BottomModalScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const {height, width} = useWindowDimensions();
  const translateYAnimatedValue = React.useRef(
    new Animated.Value(height),
  ).current;

  const modalWrapperOpacityAnimatedValue = React.useRef(
    new Animated.Value(0),
  ).current;
  const modalWrapperTranslateYAnimatedValue = React.useRef(
    new Animated.Value(height),
  ).current;

  const open = () => {
    setVisible(true);
    Animated.sequence([
      Animated.timing(modalWrapperTranslateYAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      // Animated.timing(modalWrapperOpacityAnimatedValue, {
      //   toValue: 1,
      //   duration: 300,
      //   useNativeDriver: true,
      // }),
      // Animated.timing(translateYAnimatedValue, {
      //   toValue: 0,
      //   duration: 300,
      //   useNativeDriver: true,
      // }),
    ]).start();
  };

  const close = () => {
    Animated.sequence([
      Animated.timing(modalWrapperTranslateYAnimatedValue, {
        toValue: height,
        duration: 500,
        useNativeDriver: true,
      }),
      // Animated.timing(modalWrapperOpacityAnimatedValue, {
      //   toValue: 0,
      //   duration: 300,
      //   useNativeDriver: true,
      // }),
      // Animated.timing(translateYAnimatedValue, {
      //   toValue: height,
      //   duration: 300,
      //   useNativeDriver: true,
      // }),
    ]).start(() => {
      setVisible(false);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Open" onPress={open} />

      <Animated.View
        style={[
          styles.modalWrapper,
          {transform: [{translateY: modalWrapperTranslateYAnimatedValue}]},
        ]}>
        <Animated.View style={[styles.modal]}>
          <SafeAreaView>
            <Text>BottomModal</Text>
            <Button title="Close" onPress={close} />
          </SafeAreaView>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },

  modalWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modal: {
    backgroundColor: '#fff',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
