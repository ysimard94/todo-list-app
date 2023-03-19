import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent {
  description = '';
  
  // EventEmitter va permettre de créer un événement qui va pouvoir renvoyer
  // une valeur à la composante parente dans ce cas-ci
  @Output() taskAdded = new EventEmitter();

  addTask(description: string) {
    const newTask = description;
    if (newTask.trim()) {
      // Emit est une méthode qui envoie la valeur de newTask
      // à la composante parente
      this.taskAdded.emit(newTask);
      this.description = '';
    }
  }
}
