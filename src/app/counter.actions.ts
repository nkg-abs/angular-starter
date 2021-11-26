import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const getMovies = createAction('[Movies Page] Load Movies');
export const getMoviesSuccess = createAction('[Movies API] Movies Loaded Success', props<{ movies: any}>());
