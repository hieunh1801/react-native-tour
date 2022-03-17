import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppBorderRadius, AppColor, AppFont } from './constants/app';
import randomString from './utilities/randomString';

const App = () => {
  const [todo, setTodo] = useState<string>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnPressAdd = () => {
    if (todo) {
      const newTodo: Todo = {
        id: randomString(),
        text: todo,
        createdAt: new Date().toLocaleTimeString(),
        completed: false,
      };
      console.log(newTodo);
      setTodos([newTodo, ...todos]);
    }
  };

  const handleOnPressToggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleOnPressDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

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
          {todos.map((item, index) => (
            <View style={styles.todoContainer}>
              <TouchableOpacity key={item.id} style={styles.todoContent} onPress={() => handleOnPressToggleTodo(index)}>
                <Text style={styles.todoText}>
                  {item.completed ? '✓ ' : '    '}
                  {item.text}
                </Text>
                <Text style={styles.todoCreatedAtText}>
                  {'       '}
                  {item?.createdAt}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOnPressDeleteTodo(index)}>
                <Text style={styles.deleteTodoButton}>✘</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

interface Todo {
  id: string;
  text: string;
  createdAt: string;
  completed: boolean;
  completedAt?: string;
}

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
