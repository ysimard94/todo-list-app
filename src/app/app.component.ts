import { Component, Output } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Task } from './task-form/task';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <app-task-form (taskAdded)="addTask($event)"></app-task-form>
      <app-todo-list [tasks]="tasks" (deletedTask)="deleteTask($event)"></app-todo-list>
      <footer>Yannick Simard - 2023</footer>
    </div>
  `
})

export class AppComponent {
  title = 'To-Do List App';

  // Initialise le tableau de tâches avec l'interface de tâche
  tasks: Task[] = [];

  id = 0;

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
  // Va pousser la nouvelle tâche au début du tableau, toute nouvelle tâche
  // est initialement non complétée
  addTask(description: string) {
    this.tasks.unshift({id: this.id, description: description, done: false });
    this.id++;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
