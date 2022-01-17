import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalDialogComponent } from 'src/app/shared/dialog/modal-dialog/modal-dialog.component';
import { Todo } from '../models/todo';
import Swal from 'sweetalert2'

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
  @Output() deleteRow: EventEmitter<number> = new EventEmitter();
  @Output() toggleEventChangeCount: EventEmitter<null> = new EventEmitter();

  constructor(public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
  }

  // Edit(editUserID){
  //   var user = this.allUsers.find(user=>user.id == editUserID);
  //   this.title=user.title;
  //   this.body=user.body;
  //   }

  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
    this.disableTextbox = false;
  }

  cancel(){
    this.enableEdit = false;
    this.disableTextbox = true;
  }
  saveSegment() {
    this.enableEdit = false;
    this.disableTextbox = true;
    this.todo.title = this.todo.title;
    this.todo.isCompleted = this.todo.isCompleted;;
    this.openDialog();
  }

  

  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  deleteMethod(e, i) {
    Swal.fire({
      title: 'Are you sure u want to delete?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteRow.emit(this.rowIndex);
        const dialogRef = this.dialog.open(ModalDialogComponent, {
          width: '250px',
          // data: {name: this.name, animal: this.animal},
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



