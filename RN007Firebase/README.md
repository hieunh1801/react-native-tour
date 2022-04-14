# RN007Firebase

- Init firebase project https://rnfirebase.io/
- Init firebase auth https://rnfirebase.io/auth/usage

## Information

hieunh1801@gmail.com
rn007firebase

https://console.firebase.google.com/project/rn007firebase/overview

Android package name `com.rn007firebase`

```
Variant: debug
Config: debug
Store: /Users/nguyenhuuhieu/Desktop/react-native-tour/RN007Firebase/android/app/debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Wednesday, May 1, 2052
----------
Variant: release
Config: debug
Store: /Users/nguyenhuuhieu/Desktop/react-native-tour/RN007Firebase/android/app/debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Wednesday, May 1, 2052
----------
Variant: debugAndroidTest
Config: debug
Store: /Users/nguyenhuuhieu/Desktop/react-native-tour/RN007Firebase/android/app/debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Wednesday, May 1, 2052
----------

> Task :react-native-firebase_app:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/nguyenhuuhieu/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :react-native-safe-area-context:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/nguyenhuuhieu/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :react-native-screens:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/nguyenhuuhieu/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
```

## Fire001: Login with anonymous

- Enable login by anonymous in google console
  https://console.firebase.google.com/project/rn007firebase/authentication/providers

## Fire002: Login with email and password

- Enable login with email and password in google console
  https://console.firebase.google.com/project/rn007firebase/authentication/providers

## Fire003: Login by mobile

- Add schema in URL list
-

## Fire004: Login with Apple

https://rnfirebase.io/auth/social-auth
https://github.com/invertase/react-native-apple-authentication

I did it on XCode
TARGETS > Signing & Capabilities > +Capability then search sign in then add it.
But the problem persist

Only work on ios version 13.6 simulator and 14 on real device

## Fire004: Login with google

https://github.com/react-native-google-signin/google-signin#project-setup-and-initialization

https://rnfirebase.io/auth/social-auth#google

```bash
cd android && ./gradlew clean
```
