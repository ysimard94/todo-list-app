import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <app-task-form></app-task-form>
      <app-todo-list></app-todo-list>
      <footer>Yannick Simard - 2023</footer>
    </div>
  `
})
export class AppComponent {
  title = 'To-Do List App';
}
