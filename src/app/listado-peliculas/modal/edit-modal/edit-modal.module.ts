import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { EditModalComponent } from './edit-modal.component';

@NgModule({
  declarations: [
    EditModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EditModalComponent
  ]
})
export class EditModalModule { }