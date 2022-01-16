import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos!: Todo[];

  constructor() { }

  ngOnInit(): void {

  }

  deletefromList(event){
    console.log(event);
    console.log(this.todos);
    this.todos.splice(event,1); 
  }
}
