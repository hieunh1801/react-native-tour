import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const IconChevronRight = () => {
  return (
    <Image
      source={require('../../assets/chevron_right.png')}
      style={styles.icon}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
