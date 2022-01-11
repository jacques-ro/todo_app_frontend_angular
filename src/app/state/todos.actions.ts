import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
  '[ Todos ] Create Todo',
  props<{ title: string; }>()
);

export const deleteTodo = createAction(
  '[ Todos ] Delete Todo',
  props<{ id: string; }>()
);

export const toggleCompleted = createAction(
  '[ Todos ] Toggle Completed Todo',
  props<{ id: string; }>()
);
