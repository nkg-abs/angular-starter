import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  templateUrl: './movies.component.html',
  selector: 'movies',
})
export class MoviesComponent {
  movies: any;
 
  constructor(private movieService: MoviesService) {}
 
  ngOnInit() {
    this.movieService.getAll().subscribe(movies => this.movies = movies);
  }
}