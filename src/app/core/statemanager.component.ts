import { Injectable } from "@angular/core";
import { actions } from "./actions";
import { traverse } from '@laufire/utils/collection';
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class StateManager {
  actions: object;
  state: any;
  cb: any;
  registers: Function[] = [];

  constructor(private store: Store<{ root: any }>){

    this.store.select('root').subscribe((state) => {
      this.state = state;
      this.registers.map((cb) => cb(this.state));
    });

    this.actions = traverse(actions, (value: any) =>  (data: any) =>
      store.dispatch({ type: 'setState', data: value({ state: this.state, data: data })}));
  }

  register(cb: Function){
    this.registers.push(cb);
    cb(this.state);
  }
}
