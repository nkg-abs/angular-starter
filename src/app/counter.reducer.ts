import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';


export const initialState = {
  count: 0,
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1})),
  on(decrement, (state) => ({ ...state, count: state.count - 1})),
  on(reset, (state) => ({ ...state, count: 0}))
);

export function counterReducer(state: any | undefined, action: Action) {
  return _counterReducer(state, action);
}
