# React Native with Google Sign In

npm i @react-native-google-signin/google-signin

```gradle
// android/build.gradle

classpath 'com.google.gms:google-services:4.3.10'
```

```bash

# gen key
cd android/app && keytool -genkey -v -keystore app_release_key.keystore -alias my_key_alias -keyalg RSA -keysize 2048 -validity 10000


# extract info from key
keytool -list -v -keystore app_release_key.keystore -alias my_key_alias
```
