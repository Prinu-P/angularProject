import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalDialogComponent } from 'src/app/shared/dialog/modal-dialog/modal-dialog.component';
import { Todo } from '../models/todo';
import Swal from 'sweetalert2';
import { TodoService } from '../todo.service';
import { TodoBehaviourService } from '../todoBS.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  enableEdit = false;
  enableEditIndex = null;
  disableTextbox =  true;
  @Input() todo!: Todo;
  @Input() rowIndex!: any;
  
  closeResult: string;
  @Output() deleteRow: EventEmitter<any> = new EventEmitter<{rowIndex:number,id:number}>();
  @Output() toggleEventChangeCount: EventEmitter<null> = new EventEmitter();

  constructor(public dialog: MatDialog,
    private todoService:TodoService,
    private todoBehavourService: TodoBehaviourService

  ) { }

  ngOnInit(): void {
  }

  // Edit(editUserID){
  //   var user = this.allUsers.find(user=>user.id == editUserID);
  //   this.title=user.title;
  //   this.body=user.body;
  //   }

  enableEditMethod( i: number,id: string) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    this.disableTextbox = false;
  }

  cancel(){
    this.enableEdit = false;
    this.disableTextbox = true;
  }
  saveSegment(id:string) {
    this.enableEdit = false;
    this.disableTextbox = true;
    this.todoService.editTodo(this.todo, id).subscribe();

    // this.todo.title = this.todo.title;
    // this.todo.isCompleted = this.todo.isCompleted;
    this.openDialog();
  }

  

  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      width: '250px',
      data: "Data Saved Successfully",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  deleteMethod(rowIndex:number ,id:string) {
    console.log(id);
    Swal.fire({
      title: 'Are you sure u want to delete?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteRow.emit({rowIndex:rowIndex,id:id});


        const dialogRef = this.dialog.open(ModalDialogComponent, {
          width: '250px',
          data: "Todo Deleted Succesfully",
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');

        });

      } else if (result.isDenied) {
        // Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }


  onChangetoggleMethod() {
    this.todo.isCompleted = !this.todo.isCompleted;
    this.toggleEventChangeCount.emit();
  }



}



