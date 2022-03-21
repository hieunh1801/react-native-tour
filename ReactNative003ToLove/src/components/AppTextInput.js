import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {AppColor, AppFont} from '../constants/app.constants';

const AppTextInput = ({placeholder, value, onChange, secureTextEntry}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
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
});

export default AppTextInput;
