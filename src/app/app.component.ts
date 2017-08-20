import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TodoService, TodoItem } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})

export class AppComponent implements OnInit {

  title = 'todos';
  todos: Observable< TodoItem[] >;

  constructor(private todoService: TodoService) {  }

  ngOnInit(): void {

    this.todos = this.todoService.todos;

  }

  showCompleted() {
   this.todoService.getCompleted();
  }

  showAll() {
    this.todoService.getAll();
  }

  removeCompleted() {
    this.todoService.removeCompleted();
  }

  setTodoState(text, value) {
    this.todoService.setState(text, value);
  }

}
