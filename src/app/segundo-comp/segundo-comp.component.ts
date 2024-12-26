import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-comp',
  imports: [CommonModule],
  templateUrl: './segundo-comp.component.html',
  styleUrl: './segundo-comp.component.css'
})

export class SegundoCompComponent {
  objeto = {
    propiedad1: 'Info',
    propiedad2: 'Peliculas',
    propiedad3: 'Series',
    propiedad4: 'Estrenos'
  };
}
