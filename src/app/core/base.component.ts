import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { result, traverse } from '@laufire/utils/collection';
import { actions } from './actions'

@Component({
  template: '',
  selector: 'standard-component'
})
export class BaseComponent {
  private subscription: any;
  protected dispatch: any;
  state: any;
  data: any;
  path: string = '/';
  actions: any;

  constructor(private store: Store<{ root: any}>) {
    this.dispatch = (data: any) => store.dispatch(data);
    this.actions = traverse(actions, (value: any) => (data: any) => store.dispatch({ type: 'setState', data: value({state:this.state, data:data})}))
  }

  init() {
  }

  protected ngOnInit() {
    this.subscription = this.store.select('root').subscribe((state) => {
      this.state = state;
      this.data = result(this.state, this.path);
    });
    this.init();
  }

  protected ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
