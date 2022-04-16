import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';

async function onAppleButtonPress() {
  try {
    console.log('start login');
    // performs login request
    appleAuth
      .performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      })
      .then(appleAuthRequestResponse => {
        console.log('response', appleAuthRequestResponse);
      });
  } catch (e) {
    console.log(e);
  }
}

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello WOrld</Text>
      <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleButton: {
    width: 160, // You must specify a width
    height: 45, // You must specify a height
  },
});
export default App;
