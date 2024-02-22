import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Superheroe } from 'src/app/mock/mock-superheroes';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})

export class EditModalComponent implements OnInit {
  editedHero: Superheroe;

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Superheroe
  ) {
  }
  
  ngOnInit(): void {
    this.editedHero = { ...this.data };
    console.log(this.data, 'this.data');
    console.log( this.editedHero, ' this.editedHero');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveChanges(): void {
    // Asignar los valores editados al héroe original (data)
  this.data.nombre = this.editedHero.nombre;
  this.data.descripcion = this.editedHero.descripcion;
  this.data.poder = this.editedHero.poder;
  this.data.imagenUrl = this.editedHero.imagenUrl;

  // Cerrar el modal y enviar el héroe editado de vuelta al componente padre
  this.dialogRef.close(this.data);
  }
}

