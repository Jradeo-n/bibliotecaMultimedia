import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerModule } from './banner/banner.module';
import { EditModalModule } from './listado-peliculas/modal/edit-modal/edit-modal.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerModule,
    EditModalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
