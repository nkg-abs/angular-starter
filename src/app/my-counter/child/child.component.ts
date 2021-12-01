import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  state: Observable<{ root: object }>;

  constructor(private store: Store<{ root: any}>) {
    this.state = store.select('root', 'nested')
  }
}
