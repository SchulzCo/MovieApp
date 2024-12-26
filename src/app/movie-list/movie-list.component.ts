
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from "../search-bar/search-bar.component";


@Component({
  selector: 'app-movie-list',
  imports: [CommonModule, MovieItemComponent, SearchBarComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})

export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  selectedMovie: string = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
      this.filteredMovies = data;  // Inicialmente, la lista filtrada es igual a la lista completa
    });
  }

  onMovieSelected(movieTitle: string): void {
    this.selectedMovie = movieTitle;
  }

  onSearchTermChanged(searchTerm: string): void {
    this.filteredMovies = this.movies.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
