import AsyncStorage from '@react-native-async-storage/async-storage';

const appAsyncStorage = {
  saveItem: async (key: string, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  getItem: async <T>(key: string) => {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value) as T;
  },
};

export default appAsyncStorage;
