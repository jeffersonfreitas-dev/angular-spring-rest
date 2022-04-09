import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioServiceService } from 'src/app/service/usuario-service.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{


  usuarios!: Usuario[];

  constructor(private service: UsuarioServiceService) { }

  ngOnInit(): void {
    this.service.getList().subscribe(data => {
      this.usuarios = data;
    });
  }

}
