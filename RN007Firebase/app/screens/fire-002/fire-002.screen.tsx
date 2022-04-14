import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

enum Fire002ModeEnum {
  LOGIN = 'LOGIN',
  SIGN_UP = 'SIGN_UP',
}

interface Account {
  email: string;
  password: string;
}

interface LoginFormPropsType {
  onLogin: (info: Account) => void;
  onSignUp: () => void;
}

export const LoginForm: React.FC<LoginFormPropsType> = ({
  onLogin,
  onSignUp,
}) => {
  const [email, setEmail] = useState('hieunh1801@example.com');
  const [password, setPassword] = useState('SuperSecretPassword!');

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.textInput}
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <View style={styles.actions}>
        <Button
          title="Login"
          onPress={() =>
            onLogin({
              email: email,
              password,
            })
          }
        />
        <Button title="Sign Up" onPress={onSignUp} />
      </View>
    </View>
  );
};

interface SignUpForm {
  onLogin: () => void;
  onSignUp: (info: Account) => void;
}

export const SignUpForm: React.FC<SignUpForm> = ({onLogin, onSignUp}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.textInput}
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.textInput}
        value={password}
        placeholder="Confirm password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <View style={styles.actions}>
        <Button title="Login" onPress={() => onLogin()} />
        <Button title="Sign Up" onPress={() => onSignUp({email, password})} />
      </View>
    </View>
  );
};

export const Fire002 = () => {
  const [mode, setMode] = useState<Fire002ModeEnum>(Fire002ModeEnum.LOGIN);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  const onLogin = (info: Account) => {
    setUser(null);
    setError(null);
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(info.email, info.password)
      .then(loginInfo => {
        console.log(loginInfo);
        setUser(loginInfo);
      })
      .catch(e => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSignUp = (info: Account) => {
    setUser(null);
    setLoading(true);
    setError(null);
    auth()
      .createUserWithEmailAndPassword(info.email, info.password)
      .then(loginInfo => {
        console.log(loginInfo);
        setUser(loginInfo);
      })
      .catch(e => {
        setError(e?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {mode === Fire002ModeEnum.LOGIN && (
        <LoginForm
          onLogin={onLogin}
          onSignUp={() => {
            setMode(Fire002ModeEnum.SIGN_UP);
          }}
        />
      )}

      {mode === Fire002ModeEnum.SIGN_UP && (
        <SignUpForm
          onLogin={() => {
            setMode(Fire002ModeEnum.LOGIN);
          }}
          onSignUp={onSignUp}
        />
      )}

      <Button
        title="Reset"
        onPress={() => {
          auth().signOut();
          setUser(null);
          setError(null);
          setMode(Fire002ModeEnum.LOGIN);
        }}
      />
      {loading && <ActivityIndicator size={'large'} />}
      <ScrollView>
        <Text>{user && JSON.stringify(user, null, 4)}</Text>
        <Text style={styles.textError}>
          {error && JSON.stringify(error, null, 4)}
        </Text>
      </ScrollView>
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
