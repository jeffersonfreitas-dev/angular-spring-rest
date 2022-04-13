import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) { }


  getList() : Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlUsuario);
  }


  deleteById(id:string) : Observable<any> {
    return this.http.delete(AppConstants.baseUrlUsuario +"/"+ id, {responseType: 'text'});
  }

  consultarPorNome(nome:String) : Observable<any>{
    return this.http.get<any>(AppConstants.baseUrlUsuario +"/"+nome);
  }

}
