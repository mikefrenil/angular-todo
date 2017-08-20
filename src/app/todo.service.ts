import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AppComponent } from './app.component';
import { NextTodoComponent } from './next-todo/next-todo.component';

export interface TodoItem {
  text: string;
  completed: boolean;
}

@Injectable()
export class TodoService implements OnInit {

  private _todos: TodoItem[];
  private subject: BehaviorSubject< TodoItem[] >;
  private nextTodo: Observable<string>;

  constructor() {

    this._todos = [];

    this._todos.push({
      text : 'Eat',
      completed : false
    });

    this.subject = new BehaviorSubject(this._todos.slice(0));

  }

  ngOnInit(): void {

    this.nextTodo.subscribe(x => {
      this.addTodo(x);
    });

  }

  get todos(): Observable< TodoItem[] > {
    return this.subject.asObservable();
  }

  setState(name, value) {
    this._todos.find(x => x.text === name).completed = value;
    this.subject.next(this._todos.slice(0));
  }

  removeAll() {
    setTimeout(() => {
      this._todos = [];
      this.subject.next(this._todos.slice(0));
    }, 1000);
  }

  addTodo(text: string) {
    this._todos.push({
      text : text,
      completed : false
    });

    this.subject.next(this._todos.slice(0));

  }

  removeCompleted() {
    this._todos = this._todos.filter(x => !x.completed);
    this.subject.next(this._todos.slice(0));
  }

  getCompleted() {
    this.subject.next(this._todos.slice(0).filter(x => x.completed));
  }

  getAll() {
    this.subject.next(this._todos.slice(0));
  }
}
