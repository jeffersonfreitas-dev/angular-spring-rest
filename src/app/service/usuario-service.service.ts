import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) { }


  getList() : Observable<any> {

    const user = this.http.get<any>(AppConstants.baseUrlUsuario);
    console.log(localStorage.getItem('token'));
    return user;
  }

}
