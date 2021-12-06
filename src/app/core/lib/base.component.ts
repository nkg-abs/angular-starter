import { Component, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { result } from '@laufire/utils/collection';
import { Context } from './context';
import { MoviesService } from '../../movies/movies.service';

@Injectable()
@Component({
  template: '',
})
export class BaseComponent {
  path: string = '';
  state: any;
  data: any;
  actions: any;
  init() {}
  cleanUp() {}

  readonly subscription: Function = (state: any) => {
    this.state = state;
    this.data = result(state, this.path);
  };

  constructor(private store: Store<{ root: any }>, readonly context: Context, public movieService: MoviesService) {
    this.context = this.context;
    this.state = this.context.state;
    this.actions = this.context.actions;
  }

  protected ngOnInit() {
    this.context.subscribe(this);
    this.init();
  }

  protected ngOnDestroy() {
    this.context.unsubscribe(this);
    this.cleanUp();
  }
}
