import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { result } from '@laufire/utils/collection';

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

  constructor(private store: Store<{ root: any}>) {
    // TODO: find how to pass any
    this.dispatch = (data: any) => store.dispatch(data);
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
