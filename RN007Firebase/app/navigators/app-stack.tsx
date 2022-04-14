import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/home.screen';
import {RootStackParamListEnum} from './app-stack.types';
import {Fire001} from '../screens/fire-001/fire-001.screen';
import {Fire002} from '../screens/fire-002/fire-002.screen';
import {Fire003} from '../screens/fire-003/fire-003';

const Stack = createNativeStackNavigator();

export const STACK_LIST = [
  {
    name: RootStackParamListEnum.Home,
    title: 'Home',
    component: HomeScreen,
  },
  {
    name: RootStackParamListEnum.Fire001,
    title: 'Fire001: Anonymous login',
    component: Fire001,
  },
  {
    name: RootStackParamListEnum.Fire002,
    title: 'Fire002: Sign up && login by email and password',
    component: Fire002,
  },
  {
    name: RootStackParamListEnum.Fire003,
    title: 'Fire003: Sign up && login by mobile',
    component: Fire003,
  },
];

export const AppStack = () => {
  return (
    <Stack.Navigator>
      {STACK_LIST.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              title: item.title,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};
