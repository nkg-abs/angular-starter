import { Component, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { result } from '@laufire/utils/collection';
import { StateManager } from './statemanager.component';
import { MoviesService } from '../movies/movies.service';
@Injectable()
@Component({
  template: '',
  selector: 'standard-component'
})
export class BaseComponent {
  protected dispatch: any;
  state: any;
  data: any;
  path: string = '';
  actions: any;
  subscription: Function = (state: any) => {
    this.state = state;
    this.data = result(state, this.path);
  };

  constructor(private store: Store<{ root: any }>, private stateManager: StateManager, public movieService: MoviesService) {
    this.state = this.stateManager.state;
    this.dispatch = (data: any) => store.dispatch(data);
    this.actions = this.stateManager.actions;
  }

  init() {
  }

  protected ngOnInit() {
    this.stateManager.subscribe(this);
    this.init();
  }

  protected ngOnDestroy() {
    this.stateManager.unsubscribe(this);
  }
}
