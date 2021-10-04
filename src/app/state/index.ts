export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const selectTodos = (state: TodoState) => state.todos;

