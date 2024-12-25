import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-list',
  imports: [CommonModule, MovieItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})

export class MovieListComponent implements OnInit {
  movies: any[] = [];
  selectedMovie: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }

  onMovieSelected(movieTitle: string) : void {
    this.selectedMovie = movieTitle;
  }

}