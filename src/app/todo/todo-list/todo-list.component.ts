import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos!: Todo[];
  showCount: any;
  @Output() countToFooter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  deletefromList(event){
    console.log(event);
    console.log(this.todos);
    this.todos.splice(event,1); 
    this.callCount();
  }

  callCount(){
    let completed = 0;
    let incompleted = 0;

    for(let i =0;i<this.todos.length;i++){
      if(this.todos[i].isCompleted === true){
        completed = completed +1;
      } else {
        incompleted = incompleted +1;
      }
    }

    this.showCount = {total : this.todos.length,completedCount : completed,incompletedCount: incompleted};
    this.countToFooter.emit(this.showCount);
  }
}
