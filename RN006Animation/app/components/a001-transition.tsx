import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const A001Transition = () => {
  const [translationX, setTranslationX] = React.useState(0);
  const [translationY, setTranslationY] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transform to X, to Y using JS Thread</Text>
      <Text>
        Performance is so slow if JS Thread using to wait data fetching
      </Text>
      <View
        style={[
          styles.square,
          {transform: [{translateX: translationX}, {translateY: translationY}]},
        ]}
      />
      <Button
        title="Toggle Translate X"
        onPress={() => {
          setTranslationX(translationX === 0 ? 100 : 0);
        }}
      />
      <Button
        title="Toggle Translate Y"
        onPress={() => {
          setTranslationY(translationY === 0 ? 100 : 0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
});
