import AsyncStorage from '@react-native-async-storage/async-storage';
import appAsyncStorage from './appAsyncStorage';

const ASYNC_STORAGE_KEY = '@TodoApp:todos';

const todoApi = {
  getAllTodo: async (): Promise<Todo[]> => {
    const todos = await appAsyncStorage.getItem<Todo[]>(ASYNC_STORAGE_KEY);
    return todos || [];
  },

  getTodoById: async (id: string): Promise<Todo> => {
    const todos = await appAsyncStorage.getItem<Todo[]>(ASYNC_STORAGE_KEY);
    const todo = todos?.find(t => t.id === id);
    return todo;
  },

  addTodo: async (todo: Todo): void => {
    const todos = await appAsyncStorage.getItem<Todo[]>(ASYNC_STORAGE_KEY);
    const newTodos = [...(todos || []), todo];
    await appAsyncStorage.saveItem(ASYNC_STORAGE_KEY, newTodos);
  },

  deleteTodoById: async (id: string): void => {
    const todos = await appAsyncStorage.getItem<Todo[]>(ASYNC_STORAGE_KEY);
    const newTodos = todos?.filter(t => t.id !== id);
    await appAsyncStorage.saveItem(ASYNC_STORAGE_KEY, newTodos);
  },

  updateTodo: async (mTodo: Todo): void => {
    const todos = await appAsyncStorage.getItem<Todo[]>(ASYNC_STORAGE_KEY);
    console.table('todos - ', todos);
    console.table('todo', todos);
    const newTodos = todos?.map(t => (t.id === mTodo.id ? mTodo : t));
    await appAsyncStorage.saveItem(ASYNC_STORAGE_KEY, newTodos);
  },
};

export interface Todo {
  id: string;
  text: string;
  createdAt: string;
  completed: boolean;
  completedAt?: string;
}

export default todoApi;
