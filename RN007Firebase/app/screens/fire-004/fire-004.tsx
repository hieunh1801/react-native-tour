import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppleButton} from '@invertase/react-native-apple-authentication';
import {appleAuth} from '@invertase/react-native-apple-authentication';

import auth from '@react-native-firebase/auth';

async function onAppleButtonPress() {
  try {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }

    // Create a Firebase credential from the response
    const {identityToken, nonce} = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );

    // Sign the user in with the credential
    return auth().signInWithCredential(appleCredential);
  } catch (e) {
    console.log(e);
  }
}
export const Fire004 = () => {
  useEffect(() => {
    // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
    // return appleAuth.onCredentialRevoked(async () => {
    //   console.warn(
    //     'If this function executes, User Credentials have been Revoked',
    //   );
    // });
  }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Social Login</Text>
      <AppleButton
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        style={styles.appleButton}
        onPress={() => onAppleButtonPress()}
      />
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
  appleButton: {
    width: '100%',
    height: 50,
    marginTop: 20,
  },
});
