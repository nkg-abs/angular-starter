import { createReducer, on } from '@ngrx/store';
import { getMoviesSuccess, setState } from './counter.actions';
import { seed } from './core/seed';

export const counterReducer = createReducer(
  seed,
  on(getMoviesSuccess, (state, { movies }) => ({ ...state, movies: movies})),
  on(setState, (state, { data }) => ({ ...state, ...data})),
);
