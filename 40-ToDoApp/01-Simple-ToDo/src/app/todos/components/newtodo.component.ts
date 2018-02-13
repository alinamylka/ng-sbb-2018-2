import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToDo} from '../model/todo.model';

@Component({
  selector: 'td-new-todo',
  templateUrl: './newtodo.component.html',
})
export class NewToDoComponent implements OnInit {

  newToDoTitle = '';

  ngOnInit() {
  }

  @Output() onAddToDo = new EventEmitter<ToDo>();

  addToDo() {
    const newTodo = new ToDo(this.newToDoTitle);
    this.onAddToDo.emit(newTodo);
    this.newToDoTitle = '';
  }
}
