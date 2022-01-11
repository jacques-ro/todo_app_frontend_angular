import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from "@ngrx/store";
import { Todo } from "../models";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  @Input() public todos: Todo[];
  @Output() public toggleCompleteClick: EventEmitter<string>;
  @Output() public deleteClick: EventEmitter<string>;

  constructor(private store: Store) {
    this.toggleCompleteClick = new EventEmitter();
    this.deleteClick = new EventEmitter();
    this.todos = [];
  }

  public onToggleCompleteClick(id: string): void {
    this.toggleCompleteClick.emit(id);
  }

  public onDeleteClick(id: string): void {
    this.deleteClick.emit(id);
  }
}
