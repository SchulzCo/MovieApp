import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { MovieService } from '../movie.service';
import { MovieItemComponent } from "../movie-item/movie-item.component";

@Component({
  selector: 'app-movies',
  imports: [CommonModule, MovieItemComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})

export class MoviesComponent implements OnInit {
  movies: any[] = [];  // Inicializa la propiedad como un array vacío
  selectedMovie: string | undefined;  // Propiedad para almacenar la película seleccionada

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any[]) => {
      this.movies = data;  // Asigna los datos al array de películas
    });
  }

  onMovieSelected(movieTitle: string): void {
    this.selectedMovie = movieTitle;  // Asigna el título de la película seleccionada
  }
}
