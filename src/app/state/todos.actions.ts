import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
  '[ Todos ] Create Todo',
  props<{ title: string }>()
);

export const deleteTodo = createAction(
  '[ Todos ] Delete Todo',
  props<{ id: string }>()
);

export const tickOffTodo = createAction(
  '[ Todos ] Tickoff Todo',
  props<{ id: string }>()
);
