import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { MascListad } from '../interfaces/listado.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MascService {

apiURL:string='https://localhost:7279/api/Perroes';
  
constructor(private http:HttpClient) { }


  getAll():Observable<MascListad[]>{
    return this.http.get<MascListad[]>(this.apiURL)
  }

  delete(id:number):Observable<MascListad>{
    return this.http.delete<MascListad>(this.apiURL+'/'+id)
  }

}
