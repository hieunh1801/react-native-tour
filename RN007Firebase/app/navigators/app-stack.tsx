import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/home.screen';
import {RootStackParamListEnum} from './app-stack.types';
import {Fire001} from '../screens/fire-001/fire-001.screen';
import {Fire002} from '../screens/fire-002/fire-002.screen';
import {Fire003} from '../screens/fire-003/fire-003';
import {Fire004} from '../screens/fire-004/fire-004';
import {Fire005} from '../screens/fire-005/fire-005';

const Stack = createNativeStackNavigator();

export const STACK_LIST = [
  {
    name: RootStackParamListEnum.Home,
    title: 'Home',
    component: HomeScreen,
  },
  {
    name: RootStackParamListEnum.Fire001,
    title: '001 - Authentication: Anonymous login',
    component: Fire001,
  },
  {
    name: RootStackParamListEnum.Fire002,
    title: '002 - Authentication: Sign up && login by email and password',
    component: Fire002,
  },
  {
    name: RootStackParamListEnum.Fire003,
    title: '003 - Authentication: Sign up && login by mobile',
    component: Fire003,
  },
  {
    name: RootStackParamListEnum.Fire004,
    title: '004 - Authentication: Social sign in with Apple',
    component: Fire004,
  },
  {
    name: RootStackParamListEnum.Fire005,
    title: '005 - Authentication: Social sign in with Google',
    component: Fire005,
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
