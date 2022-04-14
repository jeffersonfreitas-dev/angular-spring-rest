import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario = {login: '', senha: ''};

  constructor(private loginService: LoginServiceService, private router: Router){}
  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.router.navigate(['home']);
    }
  }

  public login(){
    this.loginService.login(this.usuario);
  }
}
