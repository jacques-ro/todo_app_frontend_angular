import { createReducer, on } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { TodoState, Todo } from "../models";
import * as TodoActions from './todos.actions';

export const appStateKey = 'app';

export const initialState: TodoState = {
  todos: [
    {
      id: uuidv4(),
      isCompleted: false,
      title: 'Mein Todo 1'
    },
    {
      id: uuidv4(),
      isCompleted: false,
      title: 'Mein Todo 2'
    },
    {
      id: uuidv4(),
      isCompleted: false,
      title: 'Mein Todo 3'
    }
  ]
};

export const reducer = createReducer(
  initialState,
  on(TodoActions.createTodo, (state, { title }) => {
    const newState = { ...state };

    const todo: Todo = {
      id: uuidv4(),
      isCompleted: false,
      title
    };

    newState.todos = [...state.todos];
    newState.todos.push(todo);

    return newState;
  }
  ),
  on(TodoActions.deleteTodo, (state, { id }) => {
    const newState = { ...state };

    newState.todos = state.todos.filter((item) => item.id !== id);

    return newState;
  }),
  on(TodoActions.toggleCompleted, (state, { id }) => {
    const newState = { ...state };

    newState.todos = state.todos.map((item) => {
      if (item.id === id) {
        if (item.isCompleted) {
          return { ...item, isCompleted: false };
        } else {
          return { ...item, isCompleted: true };
        }
      } else {
        return item;
      }
    });

    return newState;
  })
);
