import { Component, OnInit,Input, Output, EventEmitter,OnChanges,SimpleChanges} from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit,OnChanges {

  @Input('appTitle') title!: string;
  @Input() newTodo!: Todo;
  @Input() showError: boolean;

  @Output() createNewTodo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyupEnter() {
    console.log('Enter key pressed', this.newTodo);
    this.createNewTodo.emit('hello from child');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
}

}
