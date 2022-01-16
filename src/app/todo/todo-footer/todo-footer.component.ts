import { Component, OnInit , Input, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit, OnDestroy {

  @Input() todosLeft!: number;
  @Input() newtitle! : string;
  @Input() showCount : any;
  @Output() createNewTodo: EventEmitter<null> = new EventEmitter();
  @Output() showErrorMsg: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
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
  ngOnDestroy(): void {
    console.log('Footer on destroy')
}

}
