import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import  { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
