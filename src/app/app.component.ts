import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>To-do List App</h1>
    <app-todo-list></app-todo-list>
  `
})
export class AppComponent {
  title = 'To-Do List App';
}
