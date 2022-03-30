import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqResResponse } from 'src/app/pages/models/interfaz';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(private http: HttpClient) {
    console.log('usuarios service cargado')

  }

  cargarusuarios() {
    const url = 'https://proxising.com/casalux/api/luxurykitchens/collections.php';
    return this.http.get<ReqResResponse>(url);

  }



}
