import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo, TodoState } from "./models";
import { createTodo, deleteTodo, selectCompletedToDos, selectToDos, toggleCompleted } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos$: Observable<Todo[]>;
  public completedTodos$: Observable<Todo[]>;
  public todoValue: string;

  constructor(private store: Store<TodoState>) {
    this.todos$ = store.select(selectToDos);
    this.completedTodos$ = store.select(selectCompletedToDos);
    this.todoValue = "";
  }

  public addItem(): void {
    if (this.todoValue.length === 0) return;
    this.store.dispatch(createTodo({ title: this.todoValue }));
    this.todoValue = '';
  }

  public onToggleCompleteClick(id: string): void {
    this.store.dispatch(toggleCompleted({ id }));
  }

  public onDeleteClick(id: string): void {
    this.store.dispatch(deleteTodo({ id }));
  }
}
