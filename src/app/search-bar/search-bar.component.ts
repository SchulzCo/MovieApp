
import { FormsModule } from '@angular/forms'
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})

export class SearchBarComponent {
  searchTerm: string = '';
  @Output() searchTermChanged = new EventEmitter<string>();

  onSearchTermChange(): void {
    this.searchTermChanged.emit(this.searchTerm);
  }
}
