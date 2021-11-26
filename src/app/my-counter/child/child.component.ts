import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  state: Observable<{ root: object }>;

  constructor(private store: Store<{ root: any}>) {
    this.state = store.select('root')
   }

  ngOnInit(): void {
  }

  refreshDate() {
    return new Date()
  }
}
