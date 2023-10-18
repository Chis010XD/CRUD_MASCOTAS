import { Component } from '@angular/core';
import { MascService } from '../services/masc.service';
import { MascListad } from '../interfaces/listado.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  constructor(private mascService:MascService){}

  listado:MascListad[]=[]
  


  ngOnInit(): void {
    this.mascService.getAll().subscribe(
      resp=>this.listado=resp
    )    
  }

  eliminar(elim:MascListad):void{
    this.mascService.delete(elim.idMasc).subscribe(
      resp=>this.mascService.getAll().subscribe(
        re=>this.listado=re
      )
    )
  }
}
