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
    {id: 8, title: 'Use React-Native-Web', completed: false},
    {id: 9, title: 'Use React-Native-Navigation', completed: false},
    {id: 10, title: 'Use React-Native-Camera', completed: false},
    {id: 11, title: 'Use React-Native-Camera-Roll', completed: false},
    {id: 12, title: 'Use React-Native-Permissions', completed: false},
    {id: 13, title: 'Use React-Native-App-Intro', completed: false},
    {id: 14, title: 'Use React-Native-Modal', completed: false},
    {id: 15, title: 'Use React-Native-Safe-Area-View', completed: false},
    {id: 16, title: 'Use React-Native-Touchable-Highlight', completed: false},
    {id: 17, title: 'Use React-Native-Touchable-Opacity', completed: false},
    {
      id: 18,
      title: 'Use React-Native-Touchable-Native-Feedback',
      completed: false,
    },
    {
      id: 19,
      title: 'Use React-Native-Touchable-Opacity-Feedback',
      completed: false,
    },
    {
      id: 20,
      title: 'Use React-Native-Touchable-Highlight-Feedback',
      completed: false,
    },
    {
      id: 21,
      title: 'Use React-Native-Touchable-Without-Feedback',
      completed: false,
    },
    {id: 22, title: 'Use React-Native-ViewPager', completed: false},
    {id: 23, title: 'Use React-Native-Swiper', completed: false},
    {id: 24, title: 'Use React-Native-Picker', completed: false},
    {id: 25, title: 'Use React-Native-DatePicker', completed: false},
    {id: 26, title: 'Use React-Native-TimePicker', completed: false},
    {id: 27, title: 'Use React-Native-Switch', completed: false},
    {id: 28, title: 'Use React-Native-Slider', completed: false},
    {id: 29, title: 'Use React-Native-ScrollView', completed: false},
    {id: 30, title: 'Use React-Native-ListView', completed: false},
    {id: 31, title: 'Use React-Native-FlatList', completed: false},
    {id: 32, title: 'Use React-Native-SectionList', completed: false},
    {id: 33, title: 'Use React-Native-Image-Picker', completed: false},
    {id: 34, title: 'Use React-Native-Camera-Roll', completed: false},
    {id: 35, title: 'Use React-Native-Image-Resizer', completed: false},
    {id: 36, title: 'Use React-Native-Image-Zoom-Crop', completed: false},
    {id: 37, title: 'Use React-Native-Image-Zoom-Crop', completed: false},
    {id: 38, title: 'Use React-Native-Image-Zoom-Crop', completed: false},
    {id: 39, title: 'Use React-Native-Image-Zoom-Crop', completed: false},
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
