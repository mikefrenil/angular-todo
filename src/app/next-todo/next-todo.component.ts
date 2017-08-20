import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-next-todo',
  templateUrl: './next-todo.component.html',
  styleUrls: ['./next-todo.component.css']
})
export class NextTodoComponent {

  subject: Subject<string>;

  constructor(private todoService: TodoService) {
    this.subject = new Subject<string>();
  }

  addTodo(text: string) {
    this.todoService.addTodo(text);
  }

}
