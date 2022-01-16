import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ModalDialogComponent } from './dialog/modal-dialog/modal-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [CardComponent,ModalDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,

  ],
  exports: [ModalDialogComponent,CardComponent]
})
export class SharedModule { }
