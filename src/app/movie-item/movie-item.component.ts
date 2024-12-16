import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movie-item',
  imports: [CommonModule],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  @Input() movie: any;
  @Output() movieSelected = new EventEmitter<string>();

  selectMovie() {
    this.movieSelected.emit(this.movie.title);
  }
}
