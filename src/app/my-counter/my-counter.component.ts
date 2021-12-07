import { Component } from '@angular/core';
import { BaseComponent } from '../core/lib/base.component';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent extends BaseComponent{
  override path: string = '/count';

  increment() {
    this.actions.increment();
  }

  decrement() {
    this.actions.decrement();
  }

  reset() {
    this.actions.reset();
  }



  addOne(count: number) {
    return count + 1;
  }
}
