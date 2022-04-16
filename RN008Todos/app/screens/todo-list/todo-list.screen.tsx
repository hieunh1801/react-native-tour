import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {todoSelector} from '../../redux/slice/todo/todo.selector';
import {TodoListScreenPropsType} from './todo-list.screen.types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Todo} from '../../redux/slice/todo/todo.type';
import {todoActions} from '../../redux/slice/todo/todo.slice';

export const TodoListScreen: React.FC<TodoListScreenPropsType> = () => {
  const dispatch = useDispatch();
  const today = new Date();
  const todoList = useSelector(todoSelector.todoList);
  const totalTodo = useSelector(todoSelector.totalTodo);

  const toggleTodo = (todo: Todo) => {
    dispatch(
      todoActions.toggleTodo({
        todo: todo,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Task
          {totalTodo > 0 ? (
            <Text style={styles.totalItem}> ({totalTodo})</Text>
          ) : null}
        </Text>
        <Text style={styles.headerSubTitle}>
          Today {today.toISOString().slice(0, 10)}
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View>
          {todoList?.length > 0 &&
            todoList.map(todo => (
              <TouchableOpacity
                key={todo.id}
                onPress={() => toggleTodo(todo)}
                style={[styles.todoItem]}>
                <View style={[styles.todoItemContent]}>
                  <Text style={styles.todoItemTitle}>{todo.title}</Text>
                  {todo.completed ? (
                    <MaterialCommunityIcons
                      name="check-circle-outline"
                      size={20}
                      color="green"
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="checkbox-blank-circle-outline"
                      size={20}
                    />
                  )}
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'column',
    padding: 20,
  },
  headerTitle: {
    fontSize: 30,
    color: '#000',
  },
  headerSubTitle: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
  },
  scrollView: {},
  totalItem: {
    fontSize: 20,
    paddingLeft: 10,
  },
  todoItem: {
    paddingHorizontal: 20,
  },
  todoItemContent: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoItemTitle: {
    color: '#333',
  },
  todoItemCompleted: {
    opacity: 0.1,
  },
});
