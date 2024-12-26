import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-series',
  imports: [CommonModule, FormsModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})

export class SeriesComponent implements OnInit {
  series: any[] = [];  // Inicializa la propiedad como un array vacío
  filteredSeries: any[] = [];  // Propiedad para la lista filtrada
  searchTerm: string = '';  // Propiedad para almacenar el término de búsqueda

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getEpisodes().subscribe(response => {
      this.series = response.Episodes;
      this.filteredSeries = this.series;  // Inicialmente, la lista filtrada es igual a la lista completa
    });
  }

  filterSeries(): void {
    this.filteredSeries = this.series.filter(episode => 
      episode.Title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
