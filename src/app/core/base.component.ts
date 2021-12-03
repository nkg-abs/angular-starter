import { Component, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { result, traverse } from '@laufire/utils/collection';
import { StateManager } from './statemanager.component';
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

  constructor(private store: Store<{ root: any }>, private stateManager: StateManager) {
    this.state = this.stateManager.state;
    this.dispatch = (data: any) => store.dispatch(data);
    this.actions = this.stateManager.actions;
  }

  init() {
  }

  protected ngOnInit() {
    this.stateManager.register((state: any) => {
      this.state = state;
      this.data = result(state, this.path);
    })
    this.init();
  }
}
