import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Todo } from "../state";
import { tickOffTodo, createTodo } from "../state/todos.actions";
import { selectToDos } from "../state/todos.selector";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  public toDoItems: Observable<Todo[] | undefined>;

  constructor(private store: Store) {
    this.toDoItems = store.select(selectToDos);
  }

  public itemClick(id: string): void {
    this.store.dispatch(tickOffTodo({ id }));
  }

  public addItem(title: string): void {
    this.store.dispatch(createTodo({ title }));
  }
}
