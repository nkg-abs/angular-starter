import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, getMoviesSuccess } from './counter.actions';
import { seed } from './core/seed';

export const counterReducer = createReducer(
  seed,
  on(increment, (state) => ({ ...state, count: state.count + 1})),
  on(decrement, (state) => ({ ...state, count: state.count - 1})),
  on(reset, (state) => ({ ...state, count: 0})),
  on(getMoviesSuccess, (state, { movies }) => ({ ...state, movies: movies}))
);
