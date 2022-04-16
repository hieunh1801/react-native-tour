import {createSlice} from '@reduxjs/toolkit';
import {TodoSliceStateType, AddTodoActionType} from './todo.type';

const initialState: TodoSliceStateType = {
  todoList: [
    {id: 1, title: 'Use Redux', completed: false},
    {id: 2, title: 'Use TypeScript', completed: false},
    {id: 3, title: 'Use React', completed: false},
    {id: 4, title: 'Use React Native', completed: false},
    {id: 5, title: 'Use Redux Toolkit', completed: false},
    {id: 6, title: 'Use Redux-Saga', completed: false},
    {id: 7, title: 'Use React-Redux', completed: false},
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: AddTodoActionType) => {
      state.todoList.push(action.payload.todo);
    },
    toggleTodo: (state, action: AddTodoActionType) => {
      state.todoList = state.todoList.map(todo => {
        if (todo.id === action.payload.todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

export const todoActions = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
