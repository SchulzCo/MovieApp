import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movie-item',
  imports: [CommonModule],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})

export class MovieItemComponent {
  @Input() movie!: { title: string, year: number, description: string };
  @Output() movieSelected = new EventEmitter<string>();

  selectMovie(): void {
    if (this.movie) {
      this.movieSelected.emit(this.movie.title);
    }
  }
}
