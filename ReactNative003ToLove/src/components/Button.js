import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColor, AppFont} from '../constants/app.constants';

const PrimaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const SecondaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.secondaryButton}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: AppColor.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 2,
    marginVertical: 8,
  },
  primaryButtonText: {
    fontSize: 20,
    color: AppColor.black,
    fontFamily: AppFont.regular,
  },
  secondaryButton: {
    backgroundColor: AppColor.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 2,
    marginVertical: 8,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 20,
    color: AppColor.white,
    fontFamily: AppFont.regular,
  },
});

export {PrimaryButton, SecondaryButton};
