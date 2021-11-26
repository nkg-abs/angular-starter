import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './movies.component.html',
  selector: 'movies',
})
export class MoviesComponent {
  movies: any;
 
  constructor(private store: Store<{ root: any}>) {
    this.movies = store.select('root', 'movies');
  }
 
  ngOnInit() {
    this.store.dispatch({ type: '[Movies Page] Load Movies' });
  }
}