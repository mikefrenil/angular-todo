import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { TodoService } from './todo.service';


export class TodoItem {
  text : string;
  completed : boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})

export class AppComponent implements OnInit{

  title : string = 'todos';
  //nextToDo : string = '';
  //nextTodo : Subject<string>;
  //obs : Observable<any>;

  constructor(private todos: TodoService) { }

  ngOnInit() : void {
    //this.nextTodo = new Subject();
    //this.obs = this.nextTodo.asObservable();
  }

  //addTodo(text : string){
  //  this.nextTodo.next(text);
  //}

}