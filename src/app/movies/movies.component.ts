import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, MovieListComponent,SearchBarComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}
