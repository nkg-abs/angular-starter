import { Injectable } from "@angular/core";
import { actions } from "./actions";
import { traverse } from '@laufire/utils/collection';
import { Store } from "@ngrx/store";
import { BaseComponent } from "./base.component";

@Injectable({
  providedIn: 'root'
})
export class StateManager {
  actions: any = {};
  state: any;
  cb: any;
  subscriptions: Function[] = [];

  constructor(private store: Store<{ root: any }>){

    this.store.select('root').subscribe((state) => {
      this.state = state;
      this.subscriptions.map((cb) => cb(this.state));
    });

    this.actions = traverse(actions, (action: any) =>  (data: any) =>
      store.dispatch({ type: 'setState', data: action({ state: this.state, data: data })}));
  }

  subscribe(subscriber: BaseComponent){
    const { subscription } = subscriber;
    this.subscriptions.push(subscription);
    subscription(this.state);
  }

  unsubscribe(subscriber: BaseComponent){
    const { subscription } = subscriber;
    this.subscriptions = this.subscriptions.filter((item) => item !== subscription);
  }
}
