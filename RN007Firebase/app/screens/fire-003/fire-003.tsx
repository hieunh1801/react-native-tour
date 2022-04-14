import React from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export const Fire003 = () => {
  const [mobileNumber, setMobileNumber] = React.useState('+84 343218555');
  const [code, setCode] = React.useState('');
  const [confirmation, setConfirmation] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<any>(null);
  const [result, setResult] = React.useState<any>(null);

  const getConfirmation = async () => {
    try {
      setLoading(true);
      setError(null);
      const nConfirm = await auth().signInWithPhoneNumber(mobileNumber);
      setConfirmation(nConfirm);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await confirmation.confirm(code);
      setResult(response);
      console.log(response);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={mobileNumber}
        onChangeText={setMobileNumber}
        style={styles.textInput}
        placeholder="Mobile Number"
      />
      {!confirmation && (
        <Button title="Get verification code" onPress={getConfirmation} />
      )}

      {confirmation && (
        <>
          <TextInput
            value={code}
            onChangeText={setCode}
            style={styles.textInput}
            placeholder="Verification code"
          />
          <Button title="Confirm code" onPress={verifyCode} />
        </>
      )}

      {loading && <ActivityIndicator size={'large'} />}
      {error && <Text style={styles.textError}>{error}</Text>}
      {result && <Text>{JSON.stringify(result, null, 4)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 2,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textError: {
    color: 'red',
  },
});
