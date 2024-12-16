import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DataService } from '../data.service';

@Component({
  selector: 'app-array-ng-for',
  imports: [CommonModule],
  templateUrl: './array-ng-for.component.html',
  styleUrl: './array-ng-for.component.css'
})
export class ArrayNgForComponent implements OnInit { objetos: any[] = []; constructor(private dataService: DataService) {} ngOnInit(): void { this.objetos = this.dataService.getObjetos(); }}