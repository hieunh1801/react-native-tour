import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

export const Fire001 = () => {
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState<any>(null);
  // sign in in anonymously
  const signInAnonymously = useCallback(async () => {
    try {
      setIsLogging(true);
      const userLogin = await auth().signInAnonymously();
      console.log('User signed in anonymously', userLogin);
      setUser(userLogin);
    } catch (error: any) {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }
      console.error(error);
    } finally {
      setIsLogging(false);
    }
  }, []);

  useEffect(() => {
    signInAnonymously();
  }, [signInAnonymously]);

  // create user and email
  // useEffect(() => {
  //   auth()
  //     .createUserWithEmailAndPassword(
  //       'hieunh1801@example.com',
  //       'SuperSecretPassword!',
  //     )
  //     .then(() => {
  //       console.log('User account created & signed in!');
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   auth()
  //     .signInWithEmailAndPassword(
  //       'hieunh1801@example.com',
  //       'SuperSecretPassword!',
  //     )
  //     .then(user => {
  //       console.log(user);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login by anonymous</Text>
      <Text>login without any requirement</Text>
      {isLogging && <ActivityIndicator />}
      <Text>{user && JSON.stringify(user, null, 4)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
