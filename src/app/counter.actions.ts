import { createAction, props } from '@ngrx/store';

export const getMoviesSuccess = createAction('[Movies API] Movies Loaded Success', props<{ movies: any}>());
export const setState = createAction('setState', props<{ data:any }>());
