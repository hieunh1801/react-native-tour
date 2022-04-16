import {BaseActionType} from './../../store.type';
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoSliceStateType {
  todoList: Todo[];
}

export interface AddTodoActionType extends BaseActionType {
  payload: {
    todo: Todo;
  };
}

export interface ToggleTodoActionType extends BaseActionType {
  payload: {
    id: number;
  };
}

export interface DeleteTodoActionType extends BaseActionType {
  payload: {
    id: number;
  };
}

export interface UpdateTodoActionType extends BaseActionType {
  payload: {
    todo: Todo;
  };
}
