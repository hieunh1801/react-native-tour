import React, {useEffect} from 'react';
import {
  Animated,
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';

export const A005BottomModalScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const {height} = useWindowDimensions();
  const modalTranslateYAnimatedValue = React.useRef(
    new Animated.Value(height),
  ).current;

  const modalWrapperOpacityAnimatedValue = React.useRef(
    new Animated.Value(0),
  ).current;
  const modalWrapperTranslateYAnimatedValue = React.useRef(
    new Animated.Value(height),
  ).current;

  const [modalHeight, setModalHeight] = React.useState(height);

  useEffect(() => {
    modalTranslateYAnimatedValue.setValue(modalHeight);
  }, [modalHeight, modalTranslateYAnimatedValue]);

  const open = () => {
    setVisible(true);
    Animated.sequence([
      Animated.timing(modalWrapperOpacityAnimatedValue, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(modalWrapperTranslateYAnimatedValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(modalTranslateYAnimatedValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const close = () => {
    Animated.sequence([
      Animated.timing(modalTranslateYAnimatedValue, {
        toValue: modalHeight,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(modalWrapperTranslateYAnimatedValue, {
        toValue: height,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(modalWrapperOpacityAnimatedValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setVisible(false);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Open" onPress={open} />

      <Modal transparent visible={visible}>
        <TouchableWithoutFeedback onPress={close}>
          <Animated.View
            style={[
              styles.modalWrapper,

              {
                opacity: modalWrapperOpacityAnimatedValue,
                transform: [{translateY: modalWrapperTranslateYAnimatedValue}],
              },
            ]}>
            <TouchableWithoutFeedback>
              <Animated.View
                onLayout={event =>
                  setModalHeight(event.nativeEvent.layout.height)
                }
                style={[
                  styles.modal,
                  {
                    transform: [{translateY: modalTranslateYAnimatedValue}],
                  },
                ]}>
                <View style={styles.modalContent}>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta facere repellat omnis iste sapiente repudiandae veniam
                    voluptate quod exercitationem, earum obcaecati ipsam quia
                    delectus. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quod esse facilis consectetur, laboriosam delectus
                    animi adipisci exercitationem? Blanditiis enim quisquam
                    neque, sunt veritatis, aperiam quas itaque ea magnam sint
                    esse.
                  </Text>
                  <Button title="Close" onPress={close} />
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Modal>
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalContent: {
    padding: 30,
  },
});
