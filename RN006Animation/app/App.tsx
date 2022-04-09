import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ComponentType} from 'react';
import {A001TranslateXYScreen} from './screens/a001-translate-xy/a001-translate-xy.screen';
import {A002FadeInOutScreen} from './screens/a002-fade-in-out/a002-fade-in-out';
import {A003SpringDecayTimeScreen} from './screens/a003-spring-decay-time/a003-spring-decay-time';
import {HomeScreen} from './screens/home/home.screen';

import {LogBox} from 'react-native';
import {A004RotateScreen} from './screens/a004-rotate/a004-rotate';
import {A005BottomModalScreen} from './screens/a005-bottom-modal/a005-bottom-modal.screen';

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
};

export type ScreenNameEnum = keyof AppStackParamList;

const AppStack = createNativeStackNavigator<AppStackParamList>();

export interface Screen {
  screenName: ScreenNameEnum;
  component: ComponentType<any>;
}

export const APP_STACK_SCREEN_LIST: Screen[] = [
  {
    screenName: 'Home',
    component: HomeScreen,
  },
  {
    screenName: 'A001TranslateXY',
    component: A001TranslateXYScreen,
  },
  {
    screenName: 'A002FadeInOut',
    component: A002FadeInOutScreen,
  },
  {
    screenName: 'A003SpringDecayTime',
    component: A003SpringDecayTimeScreen,
  },
  {
    screenName: 'A004Rotate',
    component: A004RotateScreen,
  },
  {
    screenName: 'A005BottomModal',
    component: A005BottomModalScreen,
  },
];

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Home">
        {APP_STACK_SCREEN_LIST.map(screen => (
          <AppStack.Screen
            key={screen.screenName}
            name={screen.screenName}
            component={screen.component}
          />
        ))}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
