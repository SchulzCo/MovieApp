import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private objetos = [
    { propiedad1: 'Valor 1', propiedad2: 'Valor 2', propiedad3: 'Valor 3', propiedad4: 'Valor 4' },
    { propiedad1: 'Valor 5', propiedad2: 'Valor 6', propiedad3: 'Valor 7', propiedad4: 'Valor 8' },
    { propiedad1: 'Valor 9', propiedad2: 'Valor 10', propiedad3: 'Valor 11', propiedad4: 'Valor 12' },
    { propiedad1: 'Valor 13', propiedad2: 'Valor 14', propiedad3: 'Valor 15', propiedad4: 'Valor 16' }
  ];
  getObjetos() {
    return this.objetos;
  }
}
