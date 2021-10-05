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

  @Output() public onItemClick: EventEmitter<string>;

  constructor() {
    this.id = '1';
    this.isCompleted = false;
    this.title = 'DefaulTitle';
    this.onItemClick = new EventEmitter();
  }

  public itemClick(_event: MouseEvent): void {
    this.onItemClick.emit(this.id);
  }
}
