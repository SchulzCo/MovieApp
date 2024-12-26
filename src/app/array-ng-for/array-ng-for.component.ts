

import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-array-ng-for',
  imports: [CommonModule],
  templateUrl: './array-ng-for.component.html',
  styleUrls: ['./array-ng-for.component.css']
})
export class ArrayNgForComponent implements OnInit {
  objetos: any[] = [];
  filteredObjetos: any[] = [];
  searchTerm: string = '';

  @ViewChildren('objetoItem') objetoItems: QueryList<ElementRef> | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.objetos = this.dataService.getObjetos();
    this.filteredObjetos = this.objetos; // Inicialmente, la lista filtrada es igual a la lista completa
  }

  onSearchTermChanged(searchTerm: string): void {
    this.filteredObjetos = this.objetos.filter(objeto =>
      objeto.propiedad1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      objeto.propiedad2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      objeto.propiedad3.toLowerCase().includes(searchTerm.toLowerCase()) ||
      objeto.propiedad4.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Desplazar la vista hacia el objeto correspondiente
    setTimeout(() => {
      if (this.objetoItems) {
        const objetoElement = this.objetoItems.find((el: ElementRef) => 
          el.nativeElement.innerText.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (objetoElement) {
          objetoElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
  }
}
