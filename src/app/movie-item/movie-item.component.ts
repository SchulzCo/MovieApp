import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-item',
  imports: [CommonModule],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})

export class MovieItemComponent {
  @Input() movie: Movie | undefined;
  @Output() movieSelected = new EventEmitter<string>();

  selectMovie(): void {
    if (this.movie) {
      this.movieSelected.emit(this.movie.title);
    }
  }
}
