import './src/assets/i18n/index';

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import ButtonLogin from './src/components/ButtonLogin';
const App = () => {
  const [translate, i18n] = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');

  const changeLanguage = value => {
    console.log(value);
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };
  return (
    <View style={styles.container}>
      <Text>{translate('home_abc')}</Text>
      <Button
        title={'en'}
        style={styles.button}
        onPress={() => {
          changeLanguage('en');
        }}
      />
      <Button
        title={'kr'}
        style={styles.button}
        onPress={() => {
          changeLanguage('kr');
        }}
      />
      <Button
        title={'vi'}
        style={styles.button}
        onPress={() => {
          changeLanguage('vi');
        }}
      />

      <ButtonLogin />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 16,
    height: 50,
  },
});
export default App;
