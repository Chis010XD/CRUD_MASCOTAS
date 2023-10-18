import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListadoComponent } from './CRUD/listado/listado.component';
import { FormularioComponent } from './CRUD/formulario/formulario.component';
import { PaginacionModule } from './CRUD/paginacion.module';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PaginacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
