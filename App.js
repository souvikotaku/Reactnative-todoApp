import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoNavigator from "./navigation/TodoNavigator";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import todosReducer from "./store/reducers/todos";

export default function App() {
  const rootReducer = combineReducers({
    favoriteTodos: todosReducer,
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <TodoNavigator />
    </Provider>
    // <Text>Hello</Text>
  );
}
