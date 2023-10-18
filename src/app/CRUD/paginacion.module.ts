import { NgModule } from '@angular/core';
import { Route,RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';

const route: Route[]=[

  {path:'', redirectTo:'listado', pathMatch:'full'},
  {path:'listado', component:ListadoComponent },
  {path:'listado/formulario', component:FormularioComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule
  ]
})
export class PaginacionModule { }
