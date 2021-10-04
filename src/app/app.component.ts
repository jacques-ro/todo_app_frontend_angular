import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodos, Todo, TodoState } from './state';
import { createTodo, deleteTodo, tickOffTodo } from './state/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<TodoState>) {
    this.todos$ = store.select(selectTodos);

    this.todos$.subscribe(next => console.log(next));
  }

  _createTodo() {
    this.store.dispatch(createTodo({ title: 'test'}));
  }

  _deleteTodo() {
    this.store.dispatch(deleteTodo({ id: '1'}));
  }

  _tickOffTodo() {
    this.store.dispatch(tickOffTodo({ id: '1'}));
  }
}
