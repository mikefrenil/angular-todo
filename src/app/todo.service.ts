import { Injectable } from '@angular/core';

import { AppComponent } from './app.component';

@Injectable()
export class TodoService {

  private todos : {text : string, completed : boolean}[];

  constructor() { 
    this.todos = [];
    
    this.todos.push({
      text : 'Reading',
      completed : false
    });
  }

  getList() : {text : string, completed : boolean}[] {
    return this.todos;
  }

  addTodo(text : string){
    this.todos.push({
      text : text,
      completed : false
    });

  }

  removeCompleted(){
    this.todos = this.todos.filter(x => !x.completed);
  }

}
