import { Component,NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoCompComponent } from './nuevo-comp/nuevo-comp.component'; 
import { SegundoCompComponent } from './segundo-comp/segundo-comp.component';
import { ArrayNgForComponent } from './array-ng-for/array-ng-for.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Route } from '@angular/router';
import { MovieService } from './movie.service';
import { EjerciciosComponent } from "./ejercicios/ejercicios.component";
import { SeriesComponent } from './series/series.component';
import { NgModel} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MoviesService} from './movies.service';
import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { AppRoutingModule, routes } from './app.routes'; 

@Component({
  selector: 'app-root',
  imports: [NuevoCompComponent,
    SegundoCompComponent,
    ArrayNgForComponent,
    HeaderComponent,
    FooterComponent,
    MovieListComponent,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MovieListComponent,
    AppRoutingModule, SeriesComponent, FormsModule]
    ,


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'CoMovieApp';
}
