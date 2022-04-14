import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ComponentType} from 'react';
import {A001TranslateXYScreen} from './screens/a001-translate-xy/a001-translate-xy.screen';
import {A002FadeInOutScreen} from './screens/a002-fade-in-out/a002-fade-in-out';
import {A003SpringDecayTimeScreen} from './screens/a003-spring-decay-time/a003-spring-decay-time';
import {HomeScreen} from './screens/home/home.screen';

import {LogBox, StyleSheet} from 'react-native';
import {A004RotateScreen} from './screens/a004-rotate/a004-rotate';
import {A005BottomModalScreen} from './screens/a005-bottom-modal/a005-bottom-modal.screen';
import {Ra001} from './screens/ra001/ra001';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Ge001} from './screens/ge-001/ge-001';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
export type AppStackParamList = {
  Home: undefined;
  A001TranslateXY: undefined;
  A002FadeInOut: undefined;
  A003SpringDecayTime: undefined;
  A004Rotate: undefined;
  A005BottomModal: undefined;
  Ra001: undefined;
  Ge001: undefined;
};

export type ScreenNameEnum = keyof AppStackParamList;

const AppStack = createNativeStackNavigator<AppStackParamList>();

export interface Screen {
  screenName: ScreenNameEnum;
  component: ComponentType<any>;
  title: string;
}

export const APP_STACK_SCREEN_LIST: Screen[] = [
  {
    screenName: 'Home',
    component: HomeScreen,
    title: 'Home',
  },
  {
    screenName: 'A001TranslateXY',
    component: A001TranslateXYScreen,
    title: 'Translate to y',
  },
  {
    screenName: 'A002FadeInOut',
    component: A002FadeInOutScreen,
    title: 'Fade in out',
  },
  {
    screenName: 'A003SpringDecayTime',
    component: A003SpringDecayTimeScreen,
    title: 'Spring decay time',
  },
  {
    screenName: 'A004Rotate',
    component: A004RotateScreen,
    title: 'Rotate',
  },
  {
    screenName: 'A005BottomModal',
    component: A005BottomModalScreen,
    title: 'Bottom Modal',
  },
  {
    screenName: 'Ra001',
    component: Ra001,
    title: 'Re-animated 001 | Transition',
  },
  {
    screenName: 'Ge001',
    component: Ge001,
    title: 'Gesture 001 | Drag drop ball',
  },
];

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <AppStack.Navigator initialRouteName="Home">
          {APP_STACK_SCREEN_LIST.map(screen => (
            <AppStack.Screen
              key={screen.screenName}
              name={screen.screenName}
              component={screen.component}
              options={{title: screen.title}}
            />
          ))}
        </AppStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
