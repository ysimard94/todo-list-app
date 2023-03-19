import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {

  @Output() deletedTask = new EventEmitter<number>();

  @Input() tasks: {
    id: number;
    description: string;
    done: boolean;
  }[]  = [];

  // Va envoyer l'id de la tâche à supprimer à la composante parente
  deleteTask(id: number) {
    this.deletedTask.emit(id);
  }
}
