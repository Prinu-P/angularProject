import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { TodosComponent } from './todos/todos.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const materialModules = [MatInputModule, MatFormFieldModule, MatSlideToggleModule];


@NgModule({
  declarations: [
    TodosComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoItemComponent,
    TodoListComponent],
  imports: [CommonModule, FormsModule, ...materialModules],
  exports: [TodosComponent],

})
export class TodoModule { }
