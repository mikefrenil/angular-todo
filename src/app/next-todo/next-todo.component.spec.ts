import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextTodoComponent } from './next-todo.component';

describe('NextTodoComponent', () => {
  let component: NextTodoComponent;
  let fixture: ComponentFixture<NextTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
