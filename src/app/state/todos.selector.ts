import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from ".";
import { appStateKey } from "./todos.reducer";

export const selectApp = createFeatureSelector<TodoState>(appStateKey);

export const selectToDos = createSelector(selectApp, (state) => {
    return state.todos.filter((toDo) => !toDo.isCompleted);
});

export const selectCheckedToDos = createSelector(selectApp, (state) => {
    return state.todos.filter((toDo) => toDo.isCompleted);
});