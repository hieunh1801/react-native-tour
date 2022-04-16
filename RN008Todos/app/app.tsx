import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {TodoListScreen} from './screens/todo-list/todo-list.screen';

const App = () => {
  return (
    <Provider store={store}>
      <TodoListScreen />
    </Provider>
  );
};

export default App;
