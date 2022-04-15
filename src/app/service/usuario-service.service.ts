import { Usuario } from 'src/app/model/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  [x: string]: any;

  constructor(private http: HttpClient) { }




  getList() : Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlUsuario);
  }

  getListPage(pagina:any) : Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlUsuario + "page/" + pagina);
  }


  deleteById(id:string) : Observable<any> {
    return this.http.delete(AppConstants.baseUrlUsuario + id, {responseType: 'text'});
  }

  consultarPorNome(nome:String) : Observable<any>{
    return this.http.get<any>(AppConstants.baseUrlUsuario + "search/" + nome);
  }

  findById(uuid:String) : Observable<any> {
    return this.http.get<any>(AppConstants.baseUrlUsuario + uuid);
  }

  update(usuario: Usuario) : Observable<any> {
    return this.http.put<any>(AppConstants.baseUrlUsuario + usuario.uuid, usuario);
  }

  create(usuario: Usuario) : Observable<any> {
    return this.http.post(AppConstants.baseUrlUsuario, usuario);
  }

  usuarioAutenticado(){
    const token = localStorage.getItem('token');
    if(token == null) return false;
    return true;
  }

}
