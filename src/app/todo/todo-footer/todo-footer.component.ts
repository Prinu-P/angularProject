import { Component, OnInit , Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoBehaviourService } from '../todoBS.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  @Input() todosLeft!: number;
  @Input() newtitle! : string;
  @Input() showCount : any ;
  @Output() createNewTodo: EventEmitter<null> = new EventEmitter();
  @Output() showErrorMsg: EventEmitter<boolean> = new EventEmitter();
  dataSubject:any = {};
  todos = [];

  constructor(
    // private todoBehavourService: TodoBehaviourService
  ) { }

  ngOnInit(): void {
    // console.log(this.showCount);
    // this.todoBehavourService.currentData.subscribe(datasub =>{
    //   this.dataSubject = datasub;
    //   if(this.dataSubject != null){
    //     this.todos.push(this.dataSubject);
    //   }
    // })
  }

  handleClick() {
    console.log(this.newtitle);
    if (this.newtitle === ''){
      this.showErrorMsg.emit(true);
    }
    else{
    this.createNewTodo.emit();
    this.showErrorMsg.emit(false);
    }
  }
//   ngOnDestroy(): void {
//     console.log('Footer on destroy')
// }

}
