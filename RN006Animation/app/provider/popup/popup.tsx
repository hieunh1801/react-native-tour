import React, {
  PropsWithChildren,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';

export interface PopupConfig {
  children?: React.ReactNode;
  hideCloseButton?: boolean;
}

export interface PopupRefType {
  open: (config?: PopupConfig) => void;
  close: () => void;
  onBackdropClick?: () => void;
}

export interface PopupPropsType {
  title?: string;
}

export const Popup = React.forwardRef<
  PopupRefType,
  PropsWithChildren<PopupPropsType>
>((props, ref) => {
  const {height, width} = useWindowDimensions();
  const positionViewAnimated = useRef(new Animated.Value(height)).current;
  const opacityAnimated = useRef(new Animated.Value(0)).current;
  const positionPopupAnimated = useRef(new Animated.Value(height)).current;
  const [children, setChildren] = useState<React.ReactNode | null>(null);
  const [hideCloseButton, setHideCloseButton] = useState(false);
  const open = (config?: PopupConfig) => {
    if (config) {
      if (config?.children) {
        setChildren(config?.children);
      }
      setHideCloseButton(config?.hideCloseButton || false);
    } else {
      setChildren(null);
    }
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

  useImperativeHandle(ref, () => ({
    open: (config?: PopupConfig) => {
      open(config);
    },
    close: () => {
      close();
    },
  }));

  return (
    <TouchableWithoutFeedback onPress={close}>
      <Animated.View
        ref={ref}
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
          {children ? children : null}
          {!hideCloseButton && <Button title="Close" onPress={close} />}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#fff',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'absolute',
    borderRadius: 5,
    elevation: 10,
  },
});
