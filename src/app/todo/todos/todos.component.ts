import { Component, OnInit, ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';
import { TodoBehaviourService } from '../todoBS.service';

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
  dataSubject:any = {};
  constructor(
    public todoService: TodoService,
    private todoBehavourService: TodoBehaviourService
  ) {
    this.todoService.getAllTodos().subscribe((response) => {

      if (response.data) {

        this.todos = response.data;
        
        this.calculateCount(this.todos);
      }

    },
      (error) => {
        console.log('Error is' + error);
      });
  }

  ngOnInit(): void {
    this.todoBehavourService.currentData.subscribe(datasub =>{
      this.dataSubject = datasub;
      console.log(this.dataSubject);
      if(this.dataSubject != null){
        console.log("inside bs");
        this.todos.push(this.dataSubject);
      }
    })
   
  }

  onCreateNewTodo() {
    this.todoService.createTodo(this.newTodo).subscribe((response) =>{
      this.todoBehavourService.changeDataSub(response.data);
      this.calculateCount(this.todos);
  });
    // this.todos.push(this.newTodo);
    // console.log(this.todos);
 
    this.newTodo = new Todo();
  }


  calculateCount(todoArr) {
    console.log(todoArr);
    let completed = 0;
    let incompleted = 0;
    for (let i = 0; i < todoArr.length; i++) {
      if (todoArr[i].isCompleted === true) {
        completed = completed + 1;
      } else {
        incompleted = incompleted + 1;
      }
    }

    this.showCount = { total: todoArr.length, completedCount: completed, incompletedCount: incompleted };
  }

  onError(event) {
    console.log("error");
    this.showErrMsg = event;
  }
}
