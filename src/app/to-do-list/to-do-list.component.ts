import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Todo } from "../state";
import { tickOffTodo, createTodo } from "../state/todos.actions";
import { selectCheckedToDos, selectToDos } from "../state/todos.selector";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  public toDoItems: Observable<Todo[] | undefined>;
  public tickedOffToDoItems: Observable<Todo[] | undefined>;
  public toDoValue: string;

  constructor(private store: Store) {
    this.toDoItems = store.select(selectToDos);
    this.tickedOffToDoItems = store.select(selectCheckedToDos);
    this.toDoValue = "";
  }

  public itemClick(id: string): void {
    this.store.dispatch(tickOffTodo({ id }));
  }

  public addItem(): void {
    if (this.toDoValue.length === 0) return;
    this.store.dispatch(createTodo({ title: this.toDoValue }));
    this.toDoValue = "";
  }
}
