import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 0;
  items = ['item1', 'item2', 'item3', 'item4'];

  constructor(private store: Store<{ root: any}>) {
  }

  ngOnInit() {
    setInterval(() => this.store.dispatch({ type: '[Movies Page] Load Movies' }), 1000);
    this.store.select('root', 'count').subscribe((count) => this.count = count);
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
