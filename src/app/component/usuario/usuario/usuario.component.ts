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

  p: number = 1;
  total: number = 0;

  usuarios!: Usuario[];
  nome: String = ''

  constructor(private service: UsuarioServiceService) { }

  ngOnInit(): void {
    this.carregarPagina(1);
  }

  listarUsuarios(){
    this.service.getList().subscribe(data => {
      this.usuarios = data.content;
      this.total = data.totalElements;
    });
  }

  deletarUsuario(id: string, index: number){

    if(confirm('Deseja mesmo remover o registro de código: ' + id + "?")){
      this.service.deleteById(id).subscribe(data => {
        this.usuarios.splice(index, 1);
      }, error => {
        alert(error);
      })
    }
  }

  pesquisarPorNome() {

    if(this.nome === ''){
      this.carregarPagina(1);
    }else {
      this.service.consultarPorNome(this.nome).subscribe(data => {
        console.info(this.nome);
        this.usuarios = data.content;
        this.total = data.totalElements;
      })

    }

  }

  carregarPagina(pagina:any) {
    this.service.getListPage(pagina).subscribe(data => {
      this.usuarios = data.content;
      this.total = data.totalElements;
    });
  }

}
