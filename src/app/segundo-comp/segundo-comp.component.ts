import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-comp',
  imports: [CommonModule],
  templateUrl: './segundo-comp.component.html',
  styleUrl: './segundo-comp.component.css'
})
export class SegundoCompComponent {
objeto = { propiedad1: 'Valor 1', propiedad2: 'Valor 2', propiedad3: 'Valor 3', propiedad4: 'Valor 4'};
}
