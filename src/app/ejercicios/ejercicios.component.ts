import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ejercicios',
  imports: [CommonModule],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {

    title = 'Lista de Ejercicios';
    ejercicios = [
      { title: 'Ejercicio 1', description: 'Descripción del ejercicio 1' },
      { title: 'Ejercicio 2', description: 'Descripción del ejercicio 2' },
      { title: 'Ejercicio 3', description: 'Descripción del ejercicio 3' },
      { title: 'Ejercicio 4', description: 'Descripción del ejercicio 4' }
    ];
  
    mostrarDescripcion = false;
  }
  