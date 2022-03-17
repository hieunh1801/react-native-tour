import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import todoApi, { Todo } from './api/asyncStorage/todoApi';
import { AppBorderRadius, AppColor, AppFont } from './constants/app';
import randomString from './utilities/randomString';

const App = () => {
  const [todo, setTodo] = useState<string>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = async () => {
    try {
      const data = await todoApi.getAllTodo();
      setTodos(data);
    } catch (err: Error) {
      console.log(err);
    }
  };

  const addTodo = async (nTodo: Todo) => {
    try {
      await todoApi.addTodo(nTodo);
      loadTodos();
    } catch (err: Error) {
      console.log(err);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await todoApi.deleteTodoById(id);
      loadTodos();
    } catch (err: Error) {
      console.log(err);
    }
  };

  const updateTodo = async (mTodo: Todo) => {
    try {
      await todoApi.updateTodo(mTodo);
      loadTodos();
    } catch (err: Error) {
      console.log(err);
    }
  };

  const handleOnPressAdd = () => {
    if (todo) {
      const newTodo: Todo = {
        id: randomString(),
        text: todo,
        createdAt: new Date().toLocaleTimeString(),
        completed: false,
      };
      addTodo(newTodo);
      setTodo(null);
    }
  };

  const handleOnPressToggleTodo = (todoItem: Todo) => {
    const newTodo = { ...todoItem, completed: !todoItem.completed };
    updateTodo(newTodo);
  };

  const handleOnPressDeleteTodo = (todoItem: Todo) => {
    deleteTodo(todoItem.id);
  };

  useEffect(() => {
    console.log('init todo list');
    loadTodos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Todo List</Text>
      <View style={styles.inputFormContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.todoTextInput}
            placeholder="Todo"
            value={todo}
            onChangeText={setTodo}
            onSubmitEditing={handleOnPressAdd}
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleOnPressAdd}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView style={styles.todoListContainer}>
          {todos?.map(item => (
            <View style={styles.todoContainer} key={item.id}>
              <TouchableOpacity style={styles.todoContent} onPress={() => handleOnPressToggleTodo(item)}>
                <Text style={styles.todoText}>
                  {item.completed ? '✓ ' : '    '}
                  {item.text}
                </Text>
                <Text style={styles.todoCreatedAtText}>
                  {'       '}
                  {item?.createdAt}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOnPressDeleteTodo(item)}>
                <Text style={styles.deleteTodoButton}>✘</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
  },
  appTitle: {
    paddingHorizontal: 32,
    fontSize: 30,
    color: AppColor.primary,
    fontFamily: AppFont.regular,
  },
  inputFormContainer: {
    paddingHorizontal: 32,
    marginTop: 32,
    display: 'flex',
    flexDirection: 'row',
  },
  textInputContainer: {
    borderColor: AppColor.primary,
    borderWidth: 2,
    paddingHorizontal: 8,
    borderRadius: 3,
    opacity: 0.8,
    flex: 1,
  },
  todoTextInput: {
    fontFamily: AppFont.regular,
    fontSize: 24,
  },
  addButton: {
    marginLeft: 8,
    paddingHorizontal: 16,
    backgroundColor: AppColor.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: AppBorderRadius.forButton,
  },
  addButtonText: {
    fontSize: 20,
    fontFamily: AppFont.regular,
    color: 'white',
  },
  todoListContainer: {
    marginTop: 24,
    paddingHorizontal: 32,
  },
  todoContainer: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    borderBottomWidth: 0.2,
    borderBottomColor: AppColor.black,
  },
  todoContent: {
    flex: 1,
  },
  todoText: {
    fontSize: 16,
    color: AppColor.black,
    fontFamily: AppFont.regular,
  },
  todoCreatedAtText: {
    fontSize: 10,
    fontFamily: AppFont.regular,
  },
  deleteTodoButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default App;
