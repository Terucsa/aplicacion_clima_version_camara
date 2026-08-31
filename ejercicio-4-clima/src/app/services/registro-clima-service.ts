import { Injectable } from '@angular/core';
import {RegistroClimaModel} from "../model/registro-cima.model";

@Injectable({
  providedIn: 'root',
})
export class RegistroClimaService {
  datos: RegistroClimaModel[] = [];
  insertClima(clima: RegistroClimaModel) {
    this.datos.push(clima);
    console.log(this.datos);
    return true;
  }
}
