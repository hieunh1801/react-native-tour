import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {AppColor, AppFont} from '../constants/app.constants';

const AppTextInput = ({placeholder, value, onChange, secureTextEntry, label}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    borderColor: AppColor.primary,
    opacity: 0.8,
    borderWidth: 2,
    marginBottom: 20,
    padding: 10,
    borderRadius: 3,
    fontFamily: AppFont.regular,
  },
  label: {
    marginBottom: 8,
    fontFamily: AppFont.semiBold,
  },

  requireMarker: {
    color: AppColor.red,
  },
});

export default AppTextInput;
