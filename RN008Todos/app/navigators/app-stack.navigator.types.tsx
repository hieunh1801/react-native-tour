import {Todo} from '../redux/slice/todo/todo.type';

export type RootStackParamList = {
  TodoList: undefined;
  TodoDetail: {
    todo?: Todo;
  };
};
