import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-comp',
  imports: [CommonModule],
  templateUrl: './nuevo-comp.component.html',
  styleUrl: './nuevo-comp.component.css'
})
export class NuevoCompComponent {
   mensaje1: string = 'Bienvenidos!!!!'; mensaje2: string = 'Un placer coincidir'; mostrarMensaje: boolean = false
}
