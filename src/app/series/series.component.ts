import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series',
  imports: [CommonModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent implements OnInit {
  series: any[] | undefined;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getEpisodes().subscribe((series: { Episodes: any[]; }) => {
      this.series = series.Episodes;
    });
  }
}
