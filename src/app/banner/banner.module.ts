import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [BannerComponent]
})
export class BannerModule { }