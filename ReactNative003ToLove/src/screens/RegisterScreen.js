import React from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import {AppColor, AppFont} from '../constants/app.constants';

const BussinessAddressForm = () => {};

const RegisterScreenUI = ({
  fullName,
  phoneNumber,
  email,
  company,
  onChangeFullName,
  onChangePhoneNumber,
  onChangeEmail,
  onChangeCompany,
}) => {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>Register Screen</Text>
      <KeyboardAvoidingView>
        <AppTextInput label={'Full name'} value={fullName} onChange={onChangeFullName} />
        <AppTextInput label={'Phone number'} value={phoneNumber} onChange={onChangePhoneNumber} />
        <AppTextInput label={'Email'} value={email} onChange={onChangeEmail} />
        <AppTextInput label={'Company'} value={company} onChange={onChangeCompany} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const RegisterScreen = () => {
  const [fullName, setFullName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');

  return (
    <RegisterScreenUI
      fullName={fullName}
      phoneNumber={phoneNumber}
      email={email}
      company={company}
      onChangeFullName={setFullName}
      onChangePhoneNumber={setPhoneNumber}
      onChangeEmail={setEmail}
      onChangeCompany={setCompany}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontFamily: AppFont.semiBold,
    marginBottom: 16,
    textAlign: 'center',
    color: AppColor.primary,
  },
});
export default RegisterScreen;
