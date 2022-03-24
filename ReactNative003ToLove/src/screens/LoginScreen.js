import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import logo from '../assets/icons/logo.png';
import AppTextInput from '../components/AppTextInput';
import {PrimaryButton, SecondaryButton} from '../components/Button';
import {AppColor, AppFont, AppRouteName} from '../constants/app.constants';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onLogin = () => {
    if (username && password) {
      navigation.replace(AppRouteName.appDrawer);
    } else {
      setErrors({required: 'Username and password is required'});
    }
  };

  useEffect(() => {
    if (username || password) {
      setErrors({});
    }
  }, [username, password]);

  const onRegister = () => {
    console.log('onRegister', username, password);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <AppTextInput placeholder="username" value={username} onChange={setUsername} />
      <AppTextInput placeholder="password" value={password} onChange={setPassword} />
      {errors.required && <Text style={styles.error}>{errors.required}</Text>}
      <SecondaryButton title="Login" onPress={onLogin} />
      <PrimaryButton title="Register new account" onPress={onRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 30,
    color: AppColor.black,
    fontFamily: AppFont.regular,
    marginBottom: 32,
  },
  error: {
    width: '100%',
    color: AppColor.red,
    fontSize: 14,
    fontFamily: AppFont.regular,
    marginBottom: 16,
    marginTop: -10,
  },
});

export default LoginScreen;
