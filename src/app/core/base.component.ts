import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  template: '',
  selector: 'standard-component'
})
export class BaseComponent {
  state: any;
  subscription: any;
  path: string = '/';
  data: any;
  dispatch: any;

  constructor(private store: Store<{ root: any}>) {
    // TODO: find how to pass any
    this.dispatch = (data: any) => this.store.dispatch(data);
  }

  init() {
  }

  ngOnInit() {
    this.subscription = this.store.select('root').subscribe((state) => {
      this.state = state;
      this.data = this.state[this.path]
    });
    this.init();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
