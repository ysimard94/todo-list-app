import { Component, Output } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Task } from './task-form/task';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <app-task-form (taskAdded)="addTask($event)"></app-task-form>
      <app-todo-list [tasks]="tasks"></app-todo-list>
      <footer>Yannick Simard - 2023</footer>
    </div>
  `
})

export class AppComponent {
  title = 'To-Do List App';

  // Initialise le tableau de tâches avec l'interface de tâche
  tasks: Task[] = [];

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
  // Va pousser la nouvelle tâche au début du tableau, toute nouvelle tâche
  // est initialement non complétée
  addTask(description: string) {
    this.tasks.unshift({ description: description, done: false });
  }
}
