import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ReqResResponse } from 'src/app/pages/models/interfaz';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {


  public usuarios: any = []

  public centro: any = [];
  public imagenCentral: any = [];

  public cocina: any = [];



  constructor(private UsuariosService: UsuariosService) { }

  ngOnInit(): void {

    this.UsuariosService.cargarusuarios()
      .subscribe(resp => {

        console.log('desde usuariosservice')
        console.log(resp)
        this.usuarios = resp;
        this.cocina = resp.kitchens;
        this.centro = resp.kitchens[0].photos[0];

        console.log(resp.kitchens[2].photos[5].id);

        //console.log(this.usuarios)

      });


  }

  setearCentro(index: any) {
    this.centro = this.usuarios[index];
  }

  selectImgCentral(i: any) {
    this.imagenCentral = this.usuarios[i];
  }



}