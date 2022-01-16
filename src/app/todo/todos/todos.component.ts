import { Component, OnInit, ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public title: string = 'Todos';
  public newTodo: Todo = new Todo();
  public todos: Todo[] = [];
  showErrMsg: boolean = false;
  showCount: any;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateNewTodo() {
    let completed = 0;
    let incompleted = 0;
    this.todos.push(this.newTodo);
    console.log(this.todos);
    for(let i =0;i<this.todos.length;i++){
      if(this.todos[i].isCompleted === true){
        completed = completed +1;
      } else {
        incompleted = incompleted +1;
      }
    }

    this.showCount = {total : this.todos.length,completedCount : completed,incompletedCount: incompleted};

    this.newTodo = new Todo();
  }

  onError(event){
    console.log("error");
    this.showErrMsg = event;
  }
}
