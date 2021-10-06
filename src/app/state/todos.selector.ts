import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo, TodoState } from ".";
import { appStateKey } from "./todos.reducer";

export const selectApp = createFeatureSelector<TodoState>(appStateKey);

export const selectToDos = createSelector(selectApp, (state) => {
    return state.todos.filter((toDo: Todo) => !toDo.isCompleted);
});

export const selectCheckedToDos = createSelector(selectApp, (state) => {
    return state.todos.filter((toDo: Todo) => toDo.isCompleted);
});