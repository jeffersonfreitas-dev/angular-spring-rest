import { Observable } from 'rxjs';
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
  nome!: String;

  constructor(private service: UsuarioServiceService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.service.getList().subscribe(data => {
      this.usuarios = data;
    });
  }

  deletarUsuario(id: string){
    this.service.deleteById(id).subscribe(data => {
      alert(data);
      this.listarUsuarios();
    }, error => {
      alert(error);
    })
  }

  pesquisarPorNome() {
    this.service.consultarPorNome(this.nome).subscribe(data => {
      this.usuarios = data;
    })
  }

}
