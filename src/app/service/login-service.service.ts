import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(usuario:any){
    return this.http.post(AppConstants.baseLogins, JSON.stringify(usuario))
        .subscribe(data => {
          var token = JSON.parse(JSON.stringify(data)).Authorization.split(" ")[1];
          localStorage.setItem("token", token);
        }, error => {
          alert("Erro ao fazer o login");
        })
  }
}
