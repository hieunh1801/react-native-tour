import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigator} from './navigators/app-stack.navigator';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
