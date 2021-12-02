import { Component } from '@angular/core';
import { increment, decrement, reset } from '../counter.actions';
import { BaseComponent } from '../core/base.component';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent extends BaseComponent{
  override path: string = '/count';

  increment() {
    this.dispatch(increment());
  }

  decrement() {
    this.dispatch(decrement());
  }

  reset() {
    this.dispatch(reset());
  }

  addOne(count: number) {
    return count + 1;
  }
}
