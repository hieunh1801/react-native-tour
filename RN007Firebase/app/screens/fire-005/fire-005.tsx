import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '505880990409-v6q019susbp41vk9vt7547ae2hh55vdv.apps.googleusercontent.com', // get from firebase console => google auth
});

export const Fire005 = () => {
  const [user, setUser] = React.useState<any>(null);
  // Somewhere in your code
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );

      // Sign-in the user with the credential
      const userFromFirebase = await auth().signInWithCredential(
        googleCredential,
      );

      setUser({
        userFromFirebase,
        userFromGoogle: userInfo,
      });

      console.log({
        userFromFirebase,
        userFromGoogle: userInfo,
      });

      const userFirebase = await auth().currentUser?.getIdTokenResult();
      console.log({userFirebase});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Social Authentication: Google</Text>
      <Button title="Login with Google" onPress={signIn} />
      {user && <Text>{JSON.stringify(user, null, 4)}</Text>}
    </ScrollView>
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
