import { UsuarioServiceService } from 'src/app/service/usuario-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new Usuario();

  constructor(private routeActive: ActivatedRoute, private service: UsuarioServiceService) { }

  ngOnInit(): void {
    let uuid = this.routeActive.snapshot.paramMap.get('uuid');
    if(uuid != null){
      this.service.findById(uuid).subscribe(data => {
        this.usuario = data;
      })
    }
  }

  salvar(){

    if(this.usuario.uuid != null){
      console.log("atualizando")
      this.service.update(this.usuario).subscribe(data => {
        console.info(data);
      })
      this.novo();
    }else {
      this.service.create(this.usuario).subscribe(data => {
        console.info(data);
      })
      this.novo();
    }


  }

  novo(){
    this.usuario = new Usuario();
  }

}
