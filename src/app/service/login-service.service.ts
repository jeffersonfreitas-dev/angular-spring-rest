import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router:Router) { }

  login(usuario:any){
    return this.http.post(AppConstants.baseLogins, JSON.stringify(usuario)).subscribe(data => {
          var token = JSON.parse(JSON.stringify(data)).Authorization.split(" ")[1];
          localStorage.setItem("token", token);
          this.router.navigate(['home']);
        }, error => {
          alert("Erro ao realizar o login: " + error);
        })
  }
}
