import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TodoListScreen} from '../screens/todo-list/todo-list.screen';

const Stack = createNativeStackNavigator();

export const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TodoList"
        component={TodoListScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
