import {RootState} from '../../store';

export const todoSelector = {
  todoList: (state: RootState) => state.todo.todoList,
  totalTodo: (state: RootState) =>
    state.todo.todoList?.filter(todo => !todo.completed).length,
};
