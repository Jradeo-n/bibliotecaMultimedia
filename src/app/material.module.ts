import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
    // Agrega aquí otros módulos de Angular Material que necesites
  ]
})
export class MaterialModule { }