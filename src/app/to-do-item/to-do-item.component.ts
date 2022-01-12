import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent {
  @Input() public id: string;
  @Input() public isCompleted: boolean;
  @Input() public title: string;

  @Output() public toggleCompleteClick: EventEmitter<string>;
  @Output() public deleteClick: EventEmitter<string>;

  constructor() {
    this.id = '1';
    this.isCompleted = false;
    this.title = 'DefaulTitle';
    this.toggleCompleteClick = new EventEmitter();
    this.deleteClick = new EventEmitter();
  }

  public onToggleCompleteClick(_event: MouseEvent): void {
    this.toggleCompleteClick.emit(this.id);
  }

  public onDeleteClick(_event: MouseEvent): void {
    this.deleteClick.emit(this.id);
  }
}
