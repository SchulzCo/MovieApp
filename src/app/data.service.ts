import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private objetos = [
    { propiedad1: 'The Shawshank Redemption', propiedad2: 'The Godfather', propiedad3: 'The Dark Knight', propiedad4: 'The Godfather Part II' },
    { propiedad1: '12 Angry Men', propiedad2: 'The Lord of the Rings: The Return of the King', propiedad3: 'Schindlers List', propiedad4: 'Pulp Fiction' },
    { propiedad1: 'The Lord of the Rings: The Fellowship of the Ring', propiedad2: 'The Good, the Bad and the Ugly', propiedad3: 'Forrest Gump', propiedad4: 'The Lord of the Rings: The Two Towers' },
    { propiedad1: 'Fight Club', propiedad2: 'Inception', propiedad3: 'Star Wars: Episode V - The Empire Strikes Back', propiedad4: 'The Matrix' }
  ];
  getObjetos() {
    return this.objetos;
  }
}
