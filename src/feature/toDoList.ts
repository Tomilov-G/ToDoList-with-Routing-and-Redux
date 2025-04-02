import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "../models/todo-item";
import { v4 as uuid } from "uuid";

export interface ToDoState {
  todos: ToDo[];
}

const initialState: ToDoState = {
  todos: [],
};

export const toDoSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: ToDo = {
        id: uuid(),
        text: action.payload,
        isDone: false,
      };
      state.todos = [...state.todos, newToDo];
    },
    editAction: (
      state,
      action: PayloadAction<{ id: string; newText: string }>
    ) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.newText }
          : todo
      );
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      state.todos = newTodos;
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todos = newTodos;
    },
  },
});

export const { createAction, updateAction, deleteAction, editAction} = toDoSlice.actions;

export default toDoSlice.reducer;
