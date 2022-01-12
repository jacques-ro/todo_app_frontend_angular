import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "../models";
import { appStateKey } from "./todos.reducer";

export const selectApp = createFeatureSelector<TodoState>(appStateKey);

export const selectToDos = createSelector(selectApp, (state) => {
    return state.todos.filter((toDo) => !toDo.isCompleted);
});

export const selectCompletedToDos = createSelector(selectApp, (state) => {
    return state.todos.filter((toDo) => toDo.isCompleted);
});