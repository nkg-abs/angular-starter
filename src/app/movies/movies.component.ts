import { Component } from '@angular/core';
import { BaseComponent } from '../core/base.component';

@Component({
  templateUrl: './movies.component.html',
  selector: 'movies',
})

export class MoviesComponent extends BaseComponent{
  override path: string = "movies";

  override init(){
    this.movieService.getAll();
  }
}
