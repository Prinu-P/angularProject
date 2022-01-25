import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';
import { TodoBehaviourService } from '../todoBS.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos!: Todo[];
  showCount: any;
  @Output() countToFooter: EventEmitter<any> = new EventEmitter();
  
  dataSubject:any = {};

  constructor(
    private todoService:TodoService,
    private todoBehavourService: TodoBehaviourService
  ) { }

  ngOnInit(): void {
     
  }

  deletefromList(event){

   this.todoService.deleteTodo(event.id).subscribe();
  //  this.todoService.getAllTodos().subscribe((response) => {
  //   this.todoBehavourService.changeDataSub(response.data);
  // });
    this.todos.splice(event.rowIndex,1);

    
    //this.todos.splice(event,1); 
    this.callCount(this.todos);
  }

  callCount(todoArr:any){
    console.log(todoArr);
    let completed = 0;
    let incompleted = 0;

    for(let i =0;i<todoArr.length;i++){
      if(todoArr.isCompleted === true){
        completed = completed +1;
      } else {
        incompleted = incompleted +1;
      }
    }

    this.showCount = {total : todoArr.length,completedCount : completed,incompletedCount: incompleted};
    this.countToFooter.emit(this.showCount);
  }
}
