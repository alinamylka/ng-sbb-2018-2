import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {ToDo} from '../model/todo.model';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todolist.component.html',
})
export class TodoListComponent implements OnInit {

  @Input() todos: Array<ToDo>;
  @Output() onRemoveToDo = new EventEmitter<ToDo>();

  constructor() {
  }

  ngOnInit() {
  }

  removeToDo(todo: ToDo) {
    this.onRemoveToDo.emit(todo);
  }
}
