import React from 'react';

import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {BarCodeReadEvent, RNCamera} from 'react-native-camera';

// import QRCodeScanner from 'react-native-qrcode-scanner';

export const ScanScreen = () => {
  const [code, setCode] = React.useState<string | null>(null);
  const onSuccess = (e: BarCodeReadEvent) => {
    console.log(e.data);
    if (e.data) {
      setCode(e.data);
      Alert.alert('Scanned', e.data);
    }
  };
  return <RNCamera onBarCodeRead={onSuccess} style={StyleSheet.absoluteFill} />;
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
