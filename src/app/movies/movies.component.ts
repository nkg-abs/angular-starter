import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './movies.component.html',
  selector: 'movies',
})
export class MoviesComponent {
  movies: any;
  subscription: any;

  constructor(private store: Store<{ root: any}>) {
  }

  ngOnInit() {
    this.subscription = this.store.select('root', 'movies').subscribe((movies) =>
      this.movies = movies
    );
    this.store.dispatch({ type: '[Movies Page] Load Movies' });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
